import type { Cookies } from '@sveltejs/kit';

interface Token {
	access_token: string;
	refresh_token: string;
	expires_in: number;
	scope: string;
	id_token: string;
	token_type: string;
}

// Function to generate a random code verifier
function generateRandomString(byteLength: number): string {
	const array = new Uint8Array(byteLength);
	crypto.getRandomValues(array); // Secure random generation
	return base64UrlEncode(array); // Convert to base64 URL-safe string
}

// Function to generate a code challenge from the verifier
async function generateCodeChallenge(codeVerifier: string) {
	const encoder = new TextEncoder();
	const data = encoder.encode(codeVerifier); // Convert string to Uint8Array
	const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Hash with SHA-256
	const hashArray = new Uint8Array(hashBuffer); // Convert hash to Uint8Array
	return base64UrlEncode(hashArray); // Convert hash to base64 URL-safe string
}

function base64UrlEncode(uint8Array: Uint8Array<ArrayBuffer>) {
	return btoa(Array.from(uint8Array).map(val => {
		return String.fromCharCode(val);
	}).join('')).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export const login = async (username: string, password: string): Promise<Token> => {

	const nonce = generateRandomString(16);
	const state = generateRandomString(8);

	const codeVerifier = generateRandomString(32);
	const codeChallenge = await generateCodeChallenge(codeVerifier);

	const queryParams = new URLSearchParams(
		{
			client_id: 'brew-creator',
			redirect_uri: 'https://brewcreator.com',
			response_type: 'code',
			scope: 'openid profile email phone roles brewer-access offline_access',
			nonce,
			state,
			code_challenge: codeChallenge,
			code_challenge_method: 'S256',
			ui_locales: 'en-US'
		}
	);

	const cookies: {[id: string]: string} = {};
	const importantCookies = [".AspNetCore.Antiforgery.9TtSrW0hzOs", ".AspNetCore.Culture", ".AspNetCore.Identity.Application"]

	const addCookies = (cookieString: string | null) => {
		if (!cookieString) return;

		cookieString = cookieString.replace(",", ";");
		const cookieList = cookieString.split(';');
		cookieList.forEach((cookie: string) => {
			const cookieParts = cookie.split('=');
			const cookieKey = cookieParts[0].trim();
			if (importantCookies.includes(cookieKey)) {
				cookies[cookieKey] = decodeURIComponent(cookieParts[1].trim());
			}
		})
	};

	const getCookies = () => {
		let cookieString = '';
		Object.entries(cookies).forEach(([key, value]) => cookieString += key + '=' + value + "; ");
		return cookieString;
	}

	const requestToken = await fetch('https://identity.brewcreator.com/connect/authorize?' + queryParams.toString(), {
		method: 'GET',
	}).then(async response => {
		addCookies(response.headers.get("Set-Cookie"));
		const body = await response.text();
		const regex = /<input name="__RequestVerificationToken" type="hidden" value="(.*)" \/>/g;
		return regex.exec(body)[1];
	});

	const formData = new FormData();
	formData.append('Email', username);
	formData.append('Password', password);
	formData.append('__RequestVerificationToken', requestToken);

	await fetch("https://identity.brewcreator.com/account/login", {
		method: 'POST',
		headers: {
			"Cookie": getCookies(),
		},
		redirect: "manual",
		body: formData
	}).then(async response => {
		addCookies(response.headers.get("Set-Cookie"));
	})

	const code = await fetch('https://identity.brewcreator.com/connect/authorize?' + queryParams.toString(), {
		method: 'GET',
		headers: {
			"Cookie": getCookies(),
		},
		redirect: "manual"
	}).then(async response => {
		const redirectUrl = response.headers.get("Location");
		const redirectUrlParams = new URLSearchParams(redirectUrl.split('?')[1]);
		return redirectUrlParams.get("code");
	});

	const tokenFormData = new FormData();
	tokenFormData.append('grant_type', "authorization_code");
	tokenFormData.append('client_id', "brew-creator");
	tokenFormData.append('code_verifier', codeVerifier);
	tokenFormData.append('code', code);
	tokenFormData.append('redirect_uri', "https://brewcreator.com");

	const token = await fetch("https://identity.brewcreator.com/connect/token", {
		method: 'POST',
		headers: {
			"Cookie": getCookies(),
			"Content-Type": "application/x-www-form-urlencoded",
		},
		redirect: "manual",
		body: new URLSearchParams(tokenFormData)
	}).then(async response => {
		const token = await response.json();
		return token;
	})


	return token satisfies Token;
}

export const getTokenFromRefresh = async (refreshToken: string) => {
	const tokenFormData = new FormData();
	tokenFormData.append('grant_type', "refresh_token");
	tokenFormData.append('client_id', "brew-creator");
	tokenFormData.append('redirect_uri', "https://brewcreator.com");
	tokenFormData.append('refresh_token', refreshToken);

	const token = await fetch("https://identity.brewcreator.com/connect/token", {
		method: 'POST',
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		redirect: "manual",
		body: new URLSearchParams(tokenFormData)
	}).then(async response => {
		return await response.json();
	});

	return token satisfies Token;
}

export const getTokenFromCookies = async (cookies: Cookies) => {
	if (cookies.get('token')) return cookies.get('token');
	if (cookies.get('refresh_token')) {
		const newToken = await getTokenFromRefresh(cookies.get('refresh_token'));
		cookies.set('token', newToken.access_token, { path: "/", maxAge: newToken.expires_in });
		cookies.set('refresh_token', newToken.refresh_token, { path: "/", maxAge: 60*60*24 })
		return newToken.access_token;
	}

	return undefined;
}
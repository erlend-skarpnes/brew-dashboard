import { json } from '@sveltejs/kit';
import { Api } from '$lib/brew-api';
import { getTokenFromCookies } from '$lib/auth/token';

export async function GET({ cookies }) {
	const token = await getTokenFromCookies(cookies);
	const deviceId = cookies.get('deviceId');

	if (!deviceId || !token) {
		return new Response(null, {status: 500})
	}

	const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});

	const apiResponse = await client.api.equipmentsGetStates(deviceId);


	if (apiResponse.ok) {
		const sg = apiResponse.data.data?.sg;
		return json({ sg }, {status: 200});
	}

	return new Response(null, {status: 500});
}
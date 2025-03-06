import { json } from '@sveltejs/kit';
import { Api } from '$lib/brew-api';
import { getTokenFromCookies } from '$lib/auth/token';

export async function POST({ request, cookies }) {
	const { og, fg } = await request.json();

	const token = await getTokenFromCookies(cookies);
	const deviceId = cookies.get('deviceId');

	if (!deviceId || !token) {
		return new Response(null, {status: 500})
	}

	const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});

	const apiResponse = await client.api.equipmentsUpdateEquipment(deviceId, {og, fg, isLoggingData: true});

	if (apiResponse.ok) {
		return json(apiResponse.data.data, {status: 200});
	}

	return new Response(null, {status: 500});
}
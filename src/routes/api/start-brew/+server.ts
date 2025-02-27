import { json } from '@sveltejs/kit';
import { Api } from '$lib/brew-api';

export async function POST({ request, cookies }) {
	const { og, fg } = await request.json();

	const token = cookies.get('token');
	const deviceId = cookies.get('deviceId');

	if (!deviceId) {
		return new Response(null, {status: 500})
	}

	const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});

	const apiResponse = await client.api.equipmentsUpdateEquipment(deviceId, {og, fg, isLoggingData: true});

	if (apiResponse.ok) {
		return json(apiResponse.data.data, {status: 200});
	}

	return new Response(null, {status: 500});
}
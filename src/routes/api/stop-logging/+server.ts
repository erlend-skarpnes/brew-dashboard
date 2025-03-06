import { json } from '@sveltejs/kit';
import { Api } from '$lib/brew-api';

export async function POST({ cookies }) {

	const token = cookies.get('token');
	const deviceId = cookies.get('deviceId');

	if (!deviceId || !token) {
		return new Response(null, {status: 500})
	}

	const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});

	const apiResponse = await client.api.equipmentsUpdateEquipment(deviceId, {isLoggingData: false, brewDate: null});

	if (apiResponse.ok) {
		const isLoggingResponse = apiResponse.data.data;
		return json(isLoggingResponse, {status: 200});
	}

	return new Response(null, {status: 500});
}
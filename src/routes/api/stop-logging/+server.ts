import { json } from '@sveltejs/kit';
import { Api } from '$lib/brew-api';

export async function POST({ request, cookies }) {
	const { isLogging } = await request.json();

	const token = cookies.get('token');
	const deviceId = cookies.get('deviceId');

	if (!deviceId) {
		return new Response(null, {status: 500})
	}

	const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});

	const apiResponse = await client.api.equipmentsUpdateEquipment(deviceId, {isLoggingData: isLogging});

	if (apiResponse.ok) {
		const isLoggingResponse = apiResponse.data.data?.isLoggingData;
		console.log("isLogging", isLoggingResponse);
		return json({ isLogging: isLoggingResponse }, {status: 200});
	}

	return new Response(null, {status: 500});
}
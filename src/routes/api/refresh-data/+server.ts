import { json } from '@sveltejs/kit';
import { Api, type Coordinate } from '$lib/brew-api';
import { getTokenFromCookies } from '$lib/auth/token';


export async function GET({ cookies }) {
	const token = await getTokenFromCookies(cookies);
	const deviceId = cookies.get('deviceId');

	if (!deviceId || !token) {
		return new Response(null, {status: 500})
	}

	const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});

	const deviceStatus = (await client.api.equipmentsGetEquipment(deviceId)).data.data;

	const graphData = (await client.api.equipmentsGetEquipmentTelemetryData(deviceId)).data.data;
	const abvGraph = graphData?.filter(dataset => dataset.name === "Abv")[0].data ?? [];
	const temperatureGraph = graphData?.filter(dataset => dataset.name === "GraviatorTemperature")[0].data ?? [];
	const densityGraph = graphData?.filter(dataset => dataset.name === "GraviatorDensity")[0].data ?? [];

	return json({ deviceStatus, graphData: { alcohol: abvGraph, temperature: temperatureGraph, density: densityGraph } });
}
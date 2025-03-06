import type { LayoutServerLoad } from '../../../.svelte-kit/types/src/routes/dashboard/$types';
import { redirect } from '@sveltejs/kit';
import { Api, type Coordinate } from '$lib/brew-api';
import { getTokenFromCookies } from '$lib/auth/token';

export interface GraphData {
	alcohol: Coordinate[],
	temperature: Coordinate[],
	density: Coordinate[],
}

export const load: LayoutServerLoad = async ({ cookies }) => {
	const token = await getTokenFromCookies(cookies);

	if (!token) {
		redirect(307, "/login");
	}

	const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});
	const deviceStatus = (await client.api.equipmentsGetEquipments()).data.data?.[0];

	if (!deviceStatus?.id) {
		return
	}

	const graphData = (await client.api.equipmentsGetEquipmentTelemetryData(deviceStatus?.id)).data.data;
	const abvGraph = graphData?.filter(dataset => dataset.name === "Abv")[0].data ?? [];
	const temperatureGraph = graphData?.filter(dataset => dataset.name === "GraviatorTemperature")[0].data ?? [];
	const densityGraph = graphData?.filter(dataset => dataset.name === "GraviatorDensity")[0].data ?? [];

	cookies.set("deviceId", deviceStatus.id, { path: "/" })
	return { deviceStatus, graphData: { alcohol: abvGraph, temperature: temperatureGraph, density: densityGraph } };
};
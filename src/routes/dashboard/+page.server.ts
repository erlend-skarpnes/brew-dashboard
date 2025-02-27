import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { Api, type EquipmentDto } from '$lib/brew-api';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const token = cookies.get('token');

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

export const actions = {
	startLogging: async (event): Promise<void> => {
		const token = event.cookies.get('token');
		const deviceId = event.cookies.get('deviceId');
		const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});

		await client.api.equipmentsUpdateEquipment(deviceId, {isLoggingData: true});
	},
	stopLogging: async (event): Promise<void> => {
		const token = event.cookies.get('token');
		const deviceId = event.cookies.get('deviceId');
		const client = new Api({baseApiParams: {headers: {"Authorization": `Bearer ${token}`}}});

		const response = await client.api.equipmentsUpdateEquipment(deviceId, {isLoggingData: false});
	}
} satisfies Actions;

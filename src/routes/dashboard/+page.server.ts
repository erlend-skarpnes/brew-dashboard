import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { Api, type EquipmentDto } from '$lib/brew-api';
import type { Actions } from './$types';

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

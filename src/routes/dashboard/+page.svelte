<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import TimeseriesChart from '$lib/components/TimeseriesChart.svelte';
	import BrewController from '$lib/components/BrewController.svelte';
	import ProgressCircle from '$lib/components/ProgressCircle.svelte';
	import {browser} from '$app/environment';
	import { getContext } from 'svelte';
	import { onMount, onDestroy } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { EquipmentDto } from '$lib/brew-api';
	import type { GraphData } from './+layout.server';

	const data = getContext("deviceData") satisfies Writable<EquipmentDto>;
	const graphData = getContext("graphData") satisfies Writable<GraphData>;

	if (browser) {
		let interval: number | undefined;
		async function refreshData() {
			await fetch('/api/refresh-data', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => res.json())
				.then(res => {
					data.set(res.deviceStatus);
					graphData.set(res.graphData);
				})
				.catch(err => console.error(err))
		}

		// Set up the polling when the window is active
		function startPolling() {
			interval = setInterval(() => {
				refreshData();
			}, 10000);
		}

		// Stop the polling
		function stopPolling() {
			clearInterval(interval);
		}

		// Listen for visibility change events
		function handleVisibilityChange() {
			if (document.hidden) {
				stopPolling();
			} else {
				startPolling();
			}
		}

		onMount(() => {
			document.addEventListener('visibilitychange', handleVisibilityChange);
			if (!document.hidden) {
				startPolling(); // Start polling if the window is already active when mounted
			}
		});

		onDestroy(() => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			stopPolling(); // Clean up when the component is destroyed
		});
	}
</script>

<div class="grid grid-cols-2 xl:grid-cols-4 auto-cols-fr auto-rows-max grid-flow-row-dense gap-4 justify-items-center">
	<Card size="lg" class="flex justify-center">
		<BrewController />
	</Card>

	<Card size="lg" class="flex justify-center">
		<ProgressCircle />
	</Card>

	<Card size="xl" class="col-span-2">
		<h1>Temperatur</h1>
		<TimeseriesChart data={$graphData.temperature} legend="Temperatur" />
	</Card>

	<Card size="xl" class="col-span-2">
		<h1>Tetthet</h1>
		<TimeseriesChart data={$graphData.density} legend="Tetthet" />
	</Card>

	<Card size="xl" class="col-span-2">
		<h1>Alkoholprosent</h1>
		<TimeseriesChart data={$graphData.alcohol} legend="Alkoholprosent" />
	</Card>
</div>

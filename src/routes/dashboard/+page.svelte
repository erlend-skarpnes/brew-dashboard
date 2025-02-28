<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import TimeseriesChart from '$lib/components/TimeseriesChart.svelte';
	import BrewController from '$lib/components/BrewController.svelte';
	import ProgressCircle from '$lib/components/ProgressCircle.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { EquipmentDto } from '$lib/brew-api';

	const data = getContext("deviceData") satisfies Writable<EquipmentDto>;
	const graphData = getContext("graphData") satisfies Writable<any>;

	console.log(data)
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
		<TimeseriesChart data={$graphData?.temperature} legend="Temperatur" />
	</Card>

	<Card size="xl" class="col-span-2">
		<h1>Tetthet</h1>
		<TimeseriesChart data={$graphData?.density} legend="Tetthet" />
	</Card>

	<Card size="xl" class="col-span-2">
		<h1>Alkoholprosent</h1>
		<TimeseriesChart data={$graphData?.alcohol} legend="Alkoholprosent" />
	</Card>
</div>

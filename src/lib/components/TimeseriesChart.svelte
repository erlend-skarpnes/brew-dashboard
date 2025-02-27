<script lang="ts">

	import { Chart } from 'flowbite-svelte';
	import type { ApexOptions } from 'apexcharts';
	import type { Coordinate } from '$lib/brew-api';

	const { data, legend } = $props();

	const options = {
		chart: {
			type: 'line',
			width: '100%',
			height: '400px'
		},
		stroke: {
			curve: 'smooth'
		},
		series: [{
			name: legend,
			data: data.map((d: Coordinate) => ({ x: new Date(d.x as string), y: d.y }))
		}],
		xaxis: {
			type: 'datetime',
			labels: {
				format: 'hh:mm',
				style: {
					colors: '#fff',
				}
			}
		},
		tooltip: {
			x: { format: 'hh:mm - dd. MMM' }
		},
		dataLabels: {

		}
	} satisfies ApexOptions;
</script>

<Chart options={options} />
<script lang="ts">

	import { Chart } from 'flowbite-svelte';
	import type { ApexOptions } from 'apexcharts';
	import type { Coordinate } from '$lib/brew-api';
	import colors from 'tailwindcss/colors';

	const { data, legend, decimals = 1 } = $props();

	const options = $derived({
		chart: {
			id: legend,
			type: 'line',
			width: '100%',
			height: '400px',
			group: "timeseries"
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

				style: {
					colors: colors.gray[300],
				}
			}
		},
		yaxis: {
			decimalsInFloat: decimals,
			labels: {
				minWidth: 40,
				style: {
					colors: colors.gray[300]
				}
			}
		},
		tooltip: {
			x: { format: 'hh:mm - dd. MMM' }
		},
		grid: {
			xaxis: {
				lines: {
					show: true,
				}
			}
		}
	}) satisfies ApexOptions;
</script>

<Chart options={options} />
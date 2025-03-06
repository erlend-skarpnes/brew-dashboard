<script lang="ts">
	import type { EquipmentDto } from '$lib/brew-api';
	import { Chart } from 'flowbite-svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { ApexOptions } from 'apexcharts';
	import colors from 'tailwindcss/colors'

	const data = getContext('deviceData') satisfies Writable<EquipmentDto>;

	let diff = ($data?.og ?? 0) - ($data?.fg ?? 0);
	let progress = ($data?.og ?? 0) - ($data?.sg ?? 0);

	let percentage = Math.round((progress / diff) * 100);

	let options = $derived({
		chart: {
			height: 350,
			type: "radialBar",
		},

		series: [percentage],
		colors: [colors.green[600]],
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "65%",
				},
				track: {
					dropShadow: {
						enabled: true,
						top: 2,
						left: 0,
						blur: 4,
						opacity: 0.15
					}
				},
				dataLabels: {
					name: {
						offsetY: -10,
						color: colors.gray[300],
						fontSize: "16px"
					},
					value: {
						color: colors.gray[300],
						fontSize: "30px",
						show: true
					}
				}
			}
		},
		stroke: {
			lineCap: "round"
		},
		labels: ["Progresjon"]
	} satisfies ApexOptions);
</script>

<Chart options={options} />

<script lang="ts">
	import type { EquipmentDto } from '$lib/brew-api';
	import { Progressbar } from 'flowbite-svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import colors from 'tailwindcss/colors';
	import { BatterySolid } from 'flowbite-svelte-icons';

	const data = getContext('deviceData') satisfies Writable<EquipmentDto>;
	const currentBattery = $data?.battery || 0;


	const maxBattery = 4070;
	const diff = maxBattery - currentBattery;
	console.log({ currentBattery, maxBattery });

	let percentage = Math.min(100 - Math.round(diff / 12.5), 100) // One percentage point is observed to equal about 12.5 units

	let iconColor = undefined;

	if (percentage > 70) {
		iconColor = colors.green[600];
	} else if (percentage > 30) {
		iconColor = colors.yellow[600];
	} else {
		iconColor = colors.red[600];
	}

</script>
<div class="flex flex-row gap-2">
	<div class="h-full w-full flex items-center">
		<Progressbar progress={percentage} progressClass="bg-green-600" />
	</div>
	<div class="flex flex-row items-center gap-1">
		<BatterySolid color={iconColor}/>{percentage}%
	</div>
</div>

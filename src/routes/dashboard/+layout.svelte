<script lang="ts">

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let { children, data } = $props();

	setContext("deviceData", writable(data.deviceStatus));
	setContext("graphData", writable(data.graphData));
</script>



	<main class="w-full h-full flex-grow p-3 overflow-auto max-w-[1920px] m-auto">
		{@render children()}
	</main>








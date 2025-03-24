<script>
	import '../app.css';
	import ErrorToast from '$lib/components/ErrorToast.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	let { children } = $props();

	setContext("errorMessage", writable(""))
</script>

<svelte:head>
	<title>Bryggetrackern</title>
</svelte:head>

<div class="min-h-screen dark:bg-gray-900">
	{@render children()}
	<ErrorToast />
</div>

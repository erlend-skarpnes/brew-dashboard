<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Bryggetrackern</title>
</svelte:head>

<div class="min-h-screen dark:bg-gray-900">
{@render children()}
</div>

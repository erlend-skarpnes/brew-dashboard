<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen dark:bg-gray-900">
{@render children()}
</div>

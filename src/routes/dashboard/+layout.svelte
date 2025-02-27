<script lang="ts">

	let { children, data } = $props();
	console.dir("from layout", data)
</script>



	<main class="w-full h-full flex-grow p-3 overflow-auto max-w-[1920px] m-auto">
		{@render children()}
	</main>








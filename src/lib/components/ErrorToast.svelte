<script lang="ts">
	import { Toast } from 'flowbite-svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { ExclamationCircleSolid } from 'flowbite-svelte-icons';

	let errorMessage = getContext('errorMessage') satisfies Writable<string>;

	const isNullOrEmpty = (s: string | undefined | null) => {
		return s == null || s === '';
	};

</script>


{#if (!isNullOrEmpty($errorMessage))}
	<Toast color="red" position="bottom-left" divClass="w-full max-w-xs p-4 text-gray-500 bg-white shadow-xl ring dark:text-gray-400 dark:bg-gray-800 gap-3">
		<svelte:fragment slot="icon">
			<ExclamationCircleSolid class="w-5 h-5" />
			<span class="sr-only">Warning icon</span>
		</svelte:fragment>
		{$errorMessage}
	</Toast>
	<Toast color="red" position="bottom-left" divClass="w-full max-w-xs p-4 text-gray-500 bg-white shadow-xl ring dark:text-gray-400 dark:bg-gray-800 gap-3">
		<svelte:fragment slot="icon">
			<ExclamationCircleSolid class="w-5 h-5" />
			<span class="sr-only">Warning icon</span>
		</svelte:fragment>
		{$errorMessage}
	</Toast>
{/if}
<script lang="ts">
	import type { EquipmentDto } from '$lib/brew-api';
	import { Button, Input, Label, Spinner, Tooltip } from 'flowbite-svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	// const { data }: { data: EquipmentDto } = $props();

	let data = getContext('deviceData') satisfies Writable<EquipmentDto>;

	let isLogging = $derived($data.isLoggingData ?? undefined);
	let isDeviceActive = $derived($data.deviceTwinState?.connectionState === 'Connected');

	let stopLoading = $state(false);
	let startLoading = $state(false);
	let getOgLoading = $state(false);

	let originalGravity = $state($data.og ? $data.og * 1000 : 0);
	let finalGravity = $state($data.fg ? $data.fg * 1000 : 0);

	const stopLogging = async () => {
		stopLoading = true;
		await fetch('/api/stop-logging', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(res => {
				data.set(res);
			})
			.catch(err => console.error(err))
			.finally(() => stopLoading = false);
	};

	const getOg = async () => {
		getOgLoading = true;
		await fetch('/api/get-og', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(res => originalGravity = Math.round(res.sg * 1000))
			.finally(() => getOgLoading = false);
	};

	const startBrew = async () => {
		startLoading = true;
		await fetch('/api/start-brew', {
			method: 'POST',
			body: JSON.stringify({ fg: finalGravity / 1000, og: originalGravity / 1000 }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(res => {
				data.set(res);
			})
			.catch(err => console.error(err))
			.finally(() => startLoading = false);
	};

</script>

<div class="flex flex-col justify-between align-items-center gap-5">
	<Button color="red" disabled={!isLogging || stopLoading} onclick={stopLogging}>
		{#if stopLoading}
			<Spinner class="me-3 my-auto" size="5" color="white" /> Laster ...
		{:else}
			Stopp brygg
		{/if}
	</Button>
	<div class="flex flex-col gap-5">
		<p>Nytt brygg</p>
		<div>
			<Label for="fg">FG</Label>
			<Input type="number" name="fg" bind:value={finalGravity} disabled={isLogging} />
		</div>

		<div>
			<Label for="og">OG</Label>
			<div class="flex flex-row gap-4">
				<Input disabled={true} type="number" name="og" bind:value={originalGravity}></Input>
				<Button color="green" class="text-nowrap" disabled={isLogging || !isDeviceActive || getOgLoading} onclick={getOg}>
					{#if getOgLoading}
						<Spinner class="my-auto" size="5" color="white" />
					{:else}
						Mål OG
					{/if}
				</Button>
				{#if !isDeviceActive}
					<Tooltip class="w-64">
						For å skru på loggeren og kunne hente OG må man gjøre følgende:
						<ul>
							<li>- Sett loggeren på laderen</li>
							<li>- Ta den av og snu den opp ned til den lyser i fargen sin</li>
							<li>- Når den blinker hvitt med begge lysene er den aktiv i 30 minutt</li>
							<li>Det kan ta et minutt fra den blinker til serveren er oppdatert</li>
						</ul>
					</Tooltip>
				{/if}
			</div>
		</div>
		<Button color="green" disabled={isLogging || startLoading} onclick={startBrew}>
			{#if startLoading}
				<Spinner class="me-3 my-auto" size="5" color="white" /> Laster ...
			{:else}
				Start nytt brygg
			{/if}
		</Button>
	</div>
</div>

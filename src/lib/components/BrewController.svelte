<script lang="ts">
	import type { EquipmentDto } from '$lib/brew-api';
	import { Button, Input, Label, Tooltip } from 'flowbite-svelte';

	const { data }: { data: EquipmentDto } = $props();

	console.log(data)

	let isLogging = $state(data.isLoggingData ?? undefined);
	let isDeviceActive = $state(data.deviceTwinState?.connectionState === "Connected");

	let originalGravity = $state(data.og ? data.og * 1000 : 0);
	let finalGravity = $state(data.fg ? data.fg * 1000 : 0);

	const stopLogging = async () => {
		await fetch('/api/stop-logging', {
			method: 'POST',
			body: JSON.stringify({ isLogging: false }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(res => isLogging = res.isLogging)
			.catch(err => console.error(err));
	};

	const getOg = async () => {
		await fetch('/api/get-og', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}})
			.then(res => res.json())
			.then(res => originalGravity = Math.round(res.sg * 1000));
	};

	const startBrew = async () => {
		await fetch('/api/start-brew', {
			method: 'POST',
			body: JSON.stringify({ fg: finalGravity / 1000, og: originalGravity / 1000 }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(res => isLogging = res.isLogging)
			.catch(err => console.error(err));
	}

</script>

	<div class="flex flex-col justify-between align-items-center gap-5">
		<Button color="red" disabled={!isLogging} onclick={stopLogging}>Stopp brygg</Button>
		<div class="flex flex-col gap-5">
			<p>Nytt brygg</p>
			<div>
				<Label for="fg">FG</Label>
				<Input type="number" name="fg" bind:value={finalGravity} disabled={isLogging}/>
			</div>

			<div>
			<Label for="og">OG</Label>
				<div class="flex flex-row gap-4">
					<Input disabled={true} type="number" name="og" bind:value={originalGravity}></Input>
					<Button color="green" class="text-nowrap" disabled={isLogging || !isDeviceActive} onclick={getOg}>Mål OG</Button>
					{#if !isDeviceActive}
						<Tooltip class="w-64">
							For å skru på loggeren og kunne hente OG må man gjøre følgende:
						<ul>
							<li>- Sett loggeren på laderen</li>
							<li>- Ta den av og snu den opp ned til den lyser i fargen sin</li>
							<li>- Når den blinker hvitt med begge lysene er den aktiv i 30 minutt</li>
						</ul>
						</Tooltip>
					{/if}
				</div>
			</div>
			<Button color="green" disabled={isLogging} onclick={startBrew}>Start nytt brygg</Button>
		</div>
	</div>

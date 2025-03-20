<script lang="ts">
	import { Button, Card, Heading, Input, Label } from 'flowbite-svelte';
</script>

<div class="flex flex-col gap-8 justify-center items-center px-4 py-2 h-screen">
	<Heading class="text-center">🍻 Bryggetrackern</Heading>
	<p class="text-gray-300 w-100 text-center">Dette er en alternativ frontend til BrewCreator som jeg bruker når jeg brygger.
		Innloggingen som benyttes på BrewCreator vil også fungere her.
		Løsningen lagrer ingen data, og lagrer kun tokenet for kommunikasjon med BrewCreator i en cookie.</p>
	<Card>
	<form method="POST" class="flex flex-col gap-4">
		<div>
		<Label for="username">Brukernavn</Label>
		<Input name="username" type="email" />
		</div>
		<div>
		<Label for="password">Passord</Label>
		<Input type="password" name="password" />
		</div>
		<Button color="green" type="submit">Logg inn</Button>
	</form>
	</Card>
</div>



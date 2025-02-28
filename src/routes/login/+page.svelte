<script lang="ts">

	import { Button, Card, Input, Label } from 'flowbite-svelte';
</script>

<div class="flex justify-center items-center px-4 py-2 h-screen">
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



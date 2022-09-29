<script>
	import * as auth from '$lib/auth';
	import { goto } from '$app/navigation';

	let email = '';
	let submitting = false;

	async function login() {
		try {
			submitting = true;
			await auth.login(email);
			goto('/about');
		} catch (err) {
			submitting = false;
			console.log(err);
		}
	}
</script>

<!--
<svelte:head>
	<title>Login</title>
</svelte:head>
-->

<div>
	<form on:submit|preventDefault={login}>
		<input
			placeholder="Email"  
			type="text" 
			class="input input-bordered w-full max-w-xs" 
			id="email" 
			bind:value={email} 
		/>
		<button class="btn btn-warning" type="submit">Acceder</button>
	</form>
</div>

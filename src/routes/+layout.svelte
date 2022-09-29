<script>
	import { onMount } from 'svelte'
	import { updated } from '$app/stores';
	import ReloadPrompt from '../lib/components/ReloadPrompt.svelte';
	import { browser } from '$app/environment'
	import "../app.css";
	import { store as authStore } from '$lib/auth';
	import AuthForm from '$lib/components/AuthForm.svelte'
    import LoginImage from '$lib/components/LoginImage.svelte'

	$: auth = $authStore;

	// replaced dynamically
	const date = '__DATE__'

	function newVersionAvailable(){
		return browser && $updated
	}

	//let ReloadPrompt
	onMount(async () => {
		//enableManifest && (ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte')).default)

		// XXX: Temp workaround due to:
		// https://github.com/sveltejs/kit/issues/1198
		//
		// Also see:
		// https://github.com/sveltejs/kit/issues/696
		// https://github.com/sveltejs/kit/issues/672
		await fetch('/user');
	})
</script>

<main>
	<!--<slot />-->
	{#if auth.user}
		<slot />
	{:else}		
		<LoginImage />
		<AuthForm />
	{/if}
</main>

{#if newVersionAvailable()}
	<ReloadPrompt />
{/if}

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 2rem auto;
		max-width: 14rem;
	}
	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
		footer {
			padding: 40px 0;
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}
</style>

<script>
	import { onMount } from 'svelte'
	//import { browser, dev } from '$app/environment'
	//import Header from '$lib/components/Header/index.svelte';
	import "../app.css";

	// replaced dynamically
	const date = '__DATE__'

	let ReloadPrompt
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

<!--<Header />-->

<main>
	<img src="/favicon.png" alt="PWA Logo" width="60" height="60"/>
	<h1>SvelteKit!</h1>

	<div class="built">Built at: { date }</div>

	<h1 class="text-3xl font-bold underline">
		Hello world!
	</h1>
	<button class="btn btn-warning">With daisyui!</button>

	<slot />

</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
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

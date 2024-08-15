<script lang="ts">
	import '../app.css';

	// import { page } from '$app/stores';

	import Splash from '$components/Splashscreen.svelte';
	import Navbar from '$components/Navbar.svelte';
	import Cursor from '$components/Cursor.svelte';

	// Create a pb connection hook
	let { children } = $props();
</script>

<!-- <Splash {isLoaded} /> -->

<Navbar />

<!-- <pre>{audioStore}</pre> -->

{#if children}
	{@render children()}
{/if}

<Cursor />

<style>
	:global(body) {
		font-family: monospace;
	}

	.active {
		background-color: black;
		color: white;

		text-decoration-line: underline;

		text-underline-offset: 2px;
	}
</style>

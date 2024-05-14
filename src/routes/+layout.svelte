<script>
	import '../app.css';
	import { page } from '$app/stores';

	import Cursor from '$lib/components/Cursor.svelte';

	let { children } = $props();
	let counter = $state(0);

	// setInterval(() => {
	// 	counter++;
	// }, 1000);
</script>

<nav
	class="flex bg-white
			border-b-2 border-solid border-black
			fixed top-0 w-full min-h-4 z-10
			"
>
	<ul class="list-none flex flex-grow items-center justify-between">
		<li class:active={$page.url.pathname === '/'} class="px-4 hover:bg-black hover:text-white">
			<!-- <img src={Logo} alt="" /> -->
			<a href="/">Into Infinity </a>
		</li>
		<li>
			<span>welcome in:</span>
		</li>
		<li class:active={$page.url.pathname === '/app'} class="px-4 hover:bg-black hover:text-white">
			<a href="/app">app --></a>
		</li>
	</ul>
</nav>

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

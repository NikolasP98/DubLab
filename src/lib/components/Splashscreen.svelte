<script>
	import Logo from '$assets/logo.png';
	import { onDestroy, onMount } from 'svelte';

	let { isLoaded } = $props();
	let showSplash = $state(true);

	function destroy() {
		showSplash = false;
	}
</script>

{#if showSplash}
	<div
		id="splashscreen"
		ontransitionend={destroy}
		class="{isLoaded
			? 'opacity-0 pointer-events-none'
			: 'opacity-100'} delay-700 duration-500 bg-slate-200 transition-opacity fixed top-0 left-0 size-full flex flex-col gap-10 justify-center items-center z-50"
		class:active={!isLoaded}
	>
		<img class="max-w-48" src={Logo} alt="" />
		<div class="flex flex-col gap-1 items-center">
			<h1 class=" text-2xl">Into Infinity</h1>
			<h3>Loading...</h3>
		</div>
	</div>
{/if}

<style>
</style>

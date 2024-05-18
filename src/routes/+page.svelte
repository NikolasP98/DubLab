<script>
	import Splash from '$lib/components/Splashscreen.svelte';
	import Circles from '$lib/components/circles/CircleController.svelte';

	import Logo from '$assets/logo.png';

	import { trackData } from '$lib/stores/audioStore.svelte';
	import json from './data.json';

	// let { data } = $props();
	let isLoaded = $state(true);

	$inspect(isLoaded).with(console.log);

	$effect(() => {
		const importedTracks = json;
		trackData.trackList = Array.from(importedTracks);
	});
</script>

<div id="trendy" class="min-h-screen size-full flex flex-col items-center justify-center">
	<Splash {isLoaded} />

	<header class="flex items-center mb-5">
		<img class="max-w-24" src={Logo} alt="" />
	</header>

	<Circles {isLoaded} />
</div>

<style>
</style>

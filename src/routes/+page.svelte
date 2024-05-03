<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { spring, tweened } from 'svelte/motion';
	import Splash from '$lib/components/Splashscreen.svelte';
	import Circles from '$lib/components/circles/CircleContainer.svelte';

	import Logo from '$lib/assets/logo.png';

	let isLoaded = writable(false);
</script>

<Splash {isLoaded} />

<header class="flex items-center mb-5">
	<img class="max-w-24" src={Logo} alt="" />
</header>

<Circles {isLoaded} />

<style>
</style>

<script>
	import Splash from '$lib/components/Splashscreen.svelte';
	import Circles from '$lib/components/circles/CircleContainer.svelte';

	import Logo from '$lib/assets/logo.png';

	let { data } = $props();

	let isLoaded = $state(false);
</script>

<div id="trendy" class="min-h-screen size-full flex flex-col items-center justify-center">
	<Splash {isLoaded} />

	<header class="flex items-center mb-5">
		<img class="max-w-24" src={Logo} alt="" />
	</header>

	<Circles {data} {isLoaded} />
</div>

<style>
</style>

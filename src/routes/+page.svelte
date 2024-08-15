<script lang="ts">
	import Circles from '$components/circles/CircleController.svelte';

	import Logo from '$assets/logo.png';

	import { artistStore } from '$lib/stores/artistStore.svelte';

	let { data } = $props();
	artistStore.artists = Object.values(data);
</script>

<div id="trendy" class="min-h-screen size-full flex flex-col items-center justify-center">
	<header class="flex items-center mb-5">
		<img class="max-w-24" src={Logo} alt="" />
	</header>

	<Circles />
</div>

<style>
</style>

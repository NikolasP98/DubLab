<script>
	// import { trackData } from './stores';
	import { trackData } from '$lib/stores/audioStore.svelte';

	import Card from './BaseComponents/Card.svelte';

	const { trackList } = $derived(trackData);
</script>

<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-6 p-4 md:p-6">
	{#each trackList as track}
		<Card {track} />
	{/each}
</div>

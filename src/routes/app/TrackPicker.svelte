<script>
	import { trackData } from './stores';
	import Card from './Card.svelte';

	const tracklist = $derived($trackData.tracklist);
</script>

<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-6 p-4 md:p-6">
	{#each tracklist as track}
		<Card {track} />
	{/each}
</div>

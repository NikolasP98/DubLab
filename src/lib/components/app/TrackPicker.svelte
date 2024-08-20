<script lang="ts">
	import Player from '$lib/components/app/AudioController.svelte';
	// import Card from '$lib/components/app/Card.svelte';

	import { trackStore } from '$lib/stores/trackStore.svelte';
	import { player } from '$lib/stores/playerStore.svelte';

	let currentTracks = $derived(
		trackStore.tracks.filter((track) => {
			return (
				player.filters.length === 0 || player.filters.every((group) => track.groups.includes(group))
			);
		})
	);
</script>

<Player />

<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-6 p-4 md:p-6">
	{#if trackStore}
		{#each currentTracks as track (track.id)}
			<div class="card-container flex flex-col items-center justify-center gap-1">
				<button
					onclick={() => player.toggleTrack(track)}
					class={`size-36 max-w-36
							flex flex-col items-center justify-center
							p-2 rounded-3xl
							border-[#90ee8f] border-solid border-2
							hover:cursor-pointer

							${player.currentTracks.some((t) => t.track.id === track.id) ? ' bg-[#90ee8f] text-black' : ''}
						  `}
				>
					<span>
						{track.artists.map((t) => t.name).join(', ')}
					</span>
					<span class="text-xs text-gray-600">
						{track.genres.join(', ')}
					</span>
				</button>
				<span class="">{track.title}</span>
			</div>
		{/each}
	{:else}
		<pre>No Tracks Found!</pre>
	{/if}
</div>

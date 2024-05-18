<script>
	import { player } from '$lib/stores/playerStore.svelte';

	let { track } = $props();

	let { currentTracks } = $state(player);

	let isActive = $state(false);

	function handleClick() {
		checkIfPlaying();
		activateTrack(track);
	}

	function activateTrack() {
		if (isActive) {
			// If de-activating, run this code:
			player.removeTrack(track);
		} else {
			// If activating, run this code:
			player.addTrack(track);
		}
		isActive = !isActive;
		console.log(currentTracks);
	}

	function checkIfPlaying() {
		console.log(player);
	}
</script>

<div class="card-container flex flex-col items-center justify-center gap-1">
	<button
		class="size-36 max-w-36
	flex flex-col items-center justify-center
	 p-2 rounded-3xl
	border-[#90ee8f] border-solid border-2
	 hover:cursor-pointer
	 {!isActive
			? 'text-white bg-transparent hover:bg-[#90ee8f] hover:text-black '
			: 'bg-[#90ee8f] text-black'}"
		onclick={handleClick}
	>
		<span>
			{track.groups[0]}
		</span>
		<span class="text-xs text-gray-600">
			{track.genres[0]}
		</span>
	</button>
	<span class="">{track.artists[0]}</span>
</div>

<style>
</style>

<script>
	import { player } from './stores';

	let { track } = $props();

	let isActive = $state(false);

	function handleClick() {
		isActive = !isActive;
		if (isActive) return;

		// If activating, run this code:
	}
</script>

<div class="card-container flex flex-col items-center justify-center gap-1">
	<button
		class="size-36 max-w-36
	flex flex-col items-center justify-center
	text-white bg-transparent p-2 rounded-3xl
	border-[#90ee8f] border-solid border-2
	 hover:bg-[#90ee8f] hover:text-black hover:cursor-pointer
	 {isActive && 'bg-[#90ee8f] text-black'}"
		onclick={handleClick}
	>
		<span>
			{track.groups[0]}
		</span>
		<span class="text-xs text-gray-600">
			{track.genres[0]}
		</span>
	</button>
	<span class="">{track.artist}</span>
</div>

<style>
</style>

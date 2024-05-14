<script>
	let { entry } = $props();
	/*
	Connect to audio store, 
	once we have access to the store, 
	adjust UI based on store values
*/

	let active = $state(false);
</script>

<div class="card-container flex flex-col items-center justify-center gap-1">
	<button
		class="size-36 max-w-36
	flex flex-col items-center justify-center
	text-white bg-transparent p-2 rounded-3xl
	border-[#90ee8f] border-solid border-2
	 hover:bg-[#90ee8f] hover:text-black hover:cursor-pointer"
	>
		<span>
			{entry.groups[0]}
		</span>
		<span class="text-xs text-gray-600">
			{entry.genre}
		</span>
	</button>
	<span class="">{entry.artist}</span>
</div>

<style>
</style>

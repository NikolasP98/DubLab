<script>
	import Play from '$assets/play.svg';
	import Pause from '$assets/pause.svg';
	import Audio from '$assets/audio_wave.png';
	import Sync from '$assets/audio_sync.png';

	import { player } from '$stores/playerStore.svelte';

	let pstate = $derived(player.playerState);

	/*
	I want to optimize this, but I don't understand how
	dataflow works in state. in a sense of editing nested properties
	deep nest listening, basically. There's a video by joy of code
	that summarized this exact functionality.
	*/
</script>

<div
	class="fixed bottom-3 right-3 left-3
	flex items-center justify-between gap-5
	rounded-md
	p-4 max-w-full bg-black max-h-12"
>
	<button
		onclick={() => {
			player.toggleIO();
		}}
	>
		<img class="size-8 cursor-pointer" src={pstate == 'STOP' ? Play : Pause} alt="" />
	</button>
	<div class="flex-grow">
		<img class="h-6 w-full cursor-pointer" src={Audio} alt="" />
	</div>
	<img class="h-6" src={Sync} alt="" />
</div>

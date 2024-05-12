<script>
	import Play from '$lib/assets/play.svg';
	import Pause from '$lib/assets/pause.svg';
	import Audio from '$lib/assets/audio_wave.png';
	import Sync from '$lib/assets/audio_sync.png';

	let isPlaying = false;
</script>

<div
	class="fixed bottom-3 right-3 left-3
	flex items-center justify-between gap-5
	rounded-md
	p-4 max-w-full bg-black max-h-12"
>
	<button onclick={() => (isPlaying = !isPlaying)}>
		<img class="size-8 cursor-pointer" src={isPlaying ? Play : Pause} alt="" />
	</button>
	<div class="flex-grow">
		<img class="h-6 w-full cursor-pointer" src={Audio} alt="" />
	</div>
	<img class="h-6" src={Sync} alt="" />
</div>
<div class="h-12"></div>

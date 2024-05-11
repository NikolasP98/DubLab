<script>
	import Play from '$lib/assets/play.svg';
	import Pause from '$lib/assets/pause.svg';
	import Audio from '$lib/assets/audio_wave.png';
	import Sync from '$lib/assets/audio_sync.png';
</script>

<div
	class="fixed bottom-0 left-0 right-0
	flex items-center justify-between
	rounded-md
	py-4 px-4 min-w-full bg-white min-h-12"
>
	<img class="size-8 cursor-pointer" src={Play} alt="" />
	<img class="h-6 cursor-pointer" src={Audio} alt="" />
	<img class="h-6" src={Sync} alt="" />
</div>

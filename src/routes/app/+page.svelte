<script lang="ts">
	import type { Track } from '$lib/types';

	import FilterNav from '$components/app/HeaderPills.svelte';
	import Picker from '$components/app/TrackPicker.svelte';
	import { trackStore } from '$lib/stores/trackStore.svelte';

	// GET all tracks, parse them, and set value to TrackStore
	let { data } = $props();
	const pbTracks: Track[] = Object.values(data);
	trackStore.tracks = pbTracks;

	$inspect(trackStore.tracks);
</script>

<div class="text-white">
	<div class="flex flex-col gap-4 px-4 pt-6 mb-5 bg-black border-b-2 border-solid border-[#90ee8f]">
		<!-- Page Title -->
		<div class="flex flex-col">
			<span class="text-4xl">INTO INFINITY</span>
			<span class="second-title">AUDIO MEGA MIXER</span>
		</div>

		<!-- Content Filters -->
		<FilterNav />
	</div>

	<Picker />
</div>

<style>
</style>

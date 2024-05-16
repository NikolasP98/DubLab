<script>
	import FilterNav from './HeaderPills.svelte';
	import Picker from './TrackPicker.svelte';
	import Player from './Player.svelte';

	// import { trackData } from './stores';
	import { trackData } from './playerStore.svelte';

	import json from './data.json';

	let { data } = $props();

	// console.log(data.tracks); IMPORTED API KEY

	// USE THIS $derived() RUNE
	let { trackList } = $derived(trackData);

	$effect(() => {
		const importedTracks = json;
		trackData.trackList = Array.from(importedTracks);
	});

	$effect(() => {
		const groupSet = new Set();

		for (const track of trackList) {
			for (const group of track.groups) {
				groupSet.add(group);
			}
		}

		trackData.inputTypes = Array.from(groupSet);
	});
</script>

<Player />

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

<script>
	import Card from '$lib/components/app/Card.svelte';
	import Player from '$lib/components/app/Player.svelte';

	const edmArtists = [
		{ artist: 'SynthwaveSiren', genre: 'Synthwave', groups: ['Electric Guitars', 'Synthesizers'] },
		{ artist: 'DeepDiveDub', genre: 'Deep House', groups: ['Drums', 'Bass'] },
		{ artist: 'FutureFunkFrenzy', genre: 'Future Funk', groups: ['Synthesizers', 'Samples'] },
		{
			artist: 'CircuitBreaker',
			genre: 'Electro House',
			groups: ['Synthesizers', 'Electric Guitars']
		},
		{ artist: 'TranceTechnician', genre: 'Trance', groups: ['Synthesizers', 'Vocals'] },
		{ artist: 'TechnoTitan', genre: 'Techno', groups: ['Drums', 'Synthesizers'] },
		{ artist: 'GhettoFunkGuru', genre: 'Ghetto Funk', groups: ['Samples', 'Bass', 'Vocals'] },
		{
			artist: 'ProgressiveProphet',
			genre: 'Progressive House',
			groups: ['Synthesizers', 'Vocals']
		},
		{ artist: 'AcidApex', genre: 'Acid House', groups: ['Synthesizers', 'Bass'] },
		{ artist: 'DubstepDynamo', genre: 'Dubstep', groups: ['Drums', 'Bass', 'Synthesizers'] },
		{ artist: 'HardstyleHero', genre: 'Hardstyle', groups: ['Drums', 'Synthesizers'] },
		{
			artist: 'ChillwaveChampion',
			genre: 'Chillwave',
			groups: ['Synthesizers', 'Electric Guitars']
		},
		{ artist: 'AmbientAce', genre: 'Ambient', groups: ['Synthesizers', 'Field Recordings'] },
		{ artist: 'MoombahtonMaestro', genre: 'Moombahton', groups: ['Drums', 'Bass', 'Samples'] },
		{ artist: 'GlitchHopGenius', genre: 'Glitch Hop', groups: ['Samples', 'Synthesizers'] },
		{ artist: 'TrapTactician', genre: 'Trap', groups: ['Drums', 'Synthesizers', 'Vocals'] },
		{
			artist: 'TropicalThunder',
			genre: 'Tropical House',
			groups: ['Synthesizers', 'Vocals', 'Electric Guitars']
		},
		{ artist: 'BreakbeatBehemoth', genre: 'Breakbeat', groups: ['Drums', 'Bass', 'Samples'] },
		{ artist: 'NeurofunkNinja', genre: 'Neurofunk', groups: ['Drums', 'Bass', 'Synthesizers'] },
		{
			artist: 'LiquidLegend',
			genre: 'Liquid Drum and Bass',
			groups: ['Drums', 'Bass', 'Synthesizers', 'Vocals']
		},
		{ artist: 'JungleJuggernaut', genre: 'Jungle', groups: ['Drums', 'Bass', 'Samples'] }
	];

	const allGroups = new Set();
	for (const track of edmArtists) {
		for (const group of track.groups) {
			allGroups.add(group);
		}
	}

	// const getEntries = async () => {
	// 	const entries = await (await fetch('https://dummyjson.com/products?select=title,price')).json();
	// 	return entries;
	// };
</script>

<div class="text-white">
	<div
		class="flex flex-col gap-4 px-4 pt-6 mb-12 bg-black border-b-2 border-solid border-[#90ee8f]"
	>
		<div class="flex flex-col">
			<span class="text-4xl">INTO INFINITY</span>
			<span class="second-title">AUDIO MEGA MIXER</span>
		</div>

		<div class="flex justify-start mb-2 overflow-x-scroll gap-4 pl-4 no-scrollbar">
			{#each allGroups as group}
				<button
					class="	text-white bg-transparent min-w-min text-nowrap rounded-full
				border-[#90ee8f] border-solid border-2 px-4 py-0.5
				 hover:bg-[#90ee8f] hover:text-black hover:cursor-pointer">{group}</button
				>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-6 p-4 md:p-6">
		{#each edmArtists as entry}
			<Card {entry} />
		{/each}
	</div>
</div>

<Player />

<style>
</style>

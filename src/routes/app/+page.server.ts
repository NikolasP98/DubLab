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

export const load = ({ params }) => {
	return {
		tracks: edmArtists
	};
};

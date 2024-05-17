type Track = {
	// track data
	id: number;
	title: string;
	artists: string[];
	duration: number;
	bpm: number;
	genres: string[];
	groups: string[];

	// file data
	path: string;
	type: string;
};

type InitialAudioData = {
	tracklist: Track[];
	inputTypes: string[];
};

type AudioPlayer = {
	isPlaying: boolean;
	currentTime: number;
	loopDuration: number;
	currentTracks: Track[];
};

const initialData: InitialAudioData = {
	tracklist: [],
	inputTypes: []
};

const playerData: AudioPlayer = {
	isPlaying: false,
	currentTime: 0,
	loopDuration: 0,
	currentTracks: []
};

function createTrackLibrary(initial: InitialAudioData) {
	console.log('test');

	let trackList = $state(initial.tracklist);
	let inputTypes = $state(initial.inputTypes);

	function addTrack(track: Track) {
		trackList.push(track);
	}

	function removeTrack(track: Track) {
		trackList = trackList.filter((t) => t.id !== track.id);
	}

	return {
		get trackList() {
			return trackList;
		},
		set trackList(newList: Track[]) {
			trackList = newList;
		},

		get inputTypes() {
			return inputTypes;
		},
		set inputTypes(newList: string[]) {
			inputTypes = newList;
		},

		addTrack,
		removeTrack
	};
}

function createAudioPlayer(initial: AudioPlayer) {
	let { isPlaying, currentTime, loopDuration, currentTracks } = $state(initial);

	function setLoopDuration(duration: number) {
		loopDuration = duration;
	}

	function togglePlay() {
		isPlaying = !isPlaying;
	}

	function addTrack(track: Track) {
		currentTracks.push(track);
	}
	function removeTrack(track: Track) {
		currentTracks = currentTracks.filter((t) => t.id !== track.id);
	}

	return {
		get isPlaying() {
			return isPlaying;
		},
		set isPlaying(newState: boolean) {
			isPlaying = newState;
		},

		currentTime,
		loopDuration,
		currentTracks,
		togglePlay,
		addTrack,
		removeTrack
	};
}

export const trackData = createTrackLibrary(initialData);
export const player = createAudioPlayer(playerData);

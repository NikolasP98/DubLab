import { Track } from '$lib/types';

type AudioPlayer = {
	isPlaying: boolean;
	currentTime: number;
	loopDuration: number;
	currentTracks: Track[];
	state?: 'PLAY' | 'PAUSE' | 'STOP' | 'RECORDING';
};

const playerData: AudioPlayer = {
	isPlaying: false,
	currentTime: 0,
	loopDuration: 0,
	currentTracks: [],
	state: 'STOP'
};

function createAudioPlayer(initial: AudioPlayer) {
	let { isPlaying, currentTime, loopDuration, currentTracks, state } = $state(initial);

	function addTrack(track: Track) {
		console.log(isPlaying);
		currentTracks.push(track);
	}
	function removeTrack(track: Track) {
		console.log(isPlaying);
		currentTracks = currentTracks.filter((t) => t.id !== track.id);
	}

	return {
		get isPlaying() {
			return isPlaying;
		},
		set isPlaying(newState: boolean) {
			isPlaying = newState;
			if (newState) {
				state = 'PLAY';
			} else {
				state = 'PAUSE';
			}
		},
		get currentTracks() {
			return currentTracks;
		},
		// get currentTime() {
		// 	return currentTime;
		// },
		// set currentTime(newTime: number) {
		// 	currentTime = newTime;
		// },

		addTrack,
		removeTrack
	};
}

export const player = createAudioPlayer(playerData);

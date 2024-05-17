import { Track } from '$lib/types';

type AudioPlayer = {
	isPlaying: boolean;
	currentTime: number;
	loopDuration: number;
	currentTracks: Track[];
};

const playerData: AudioPlayer = {
	isPlaying: false,
	currentTime: 0,
	loopDuration: 0,
	currentTracks: []
};

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

export const player = createAudioPlayer(playerData);

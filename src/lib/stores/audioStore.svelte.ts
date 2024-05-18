import { Track } from '$lib/types';

type InitialAudioData = {
	tracklist: Track[];

	// ─── Add Subroute For Calculated Properties ──────────────────────────

	inputTypes: string[];
};

const initialData: InitialAudioData = {
	tracklist: [],
	inputTypes: []
};
function createTrackLibrary(initial: InitialAudioData) {
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

export const trackData = createTrackLibrary(initialData);

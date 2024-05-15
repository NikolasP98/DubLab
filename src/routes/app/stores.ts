import { writable, derived } from 'svelte/store';

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

type AudioData = {
	tracklist: Track[];
	inputTypes: string[];
};

type AudioPlayer = {
	isPlaying: boolean;
	currentTime: number;
	loopDuration: number;
	currentTracks: Track[];
};

const initialData: AudioData = {
	tracklist: [],
	inputTypes: []
};

const playerData: AudioPlayer = {
	isPlaying: false,
	currentTime: 0,
	loopDuration: 0,
	currentTracks: []
};

const trackLibrary = (data: AudioData) => {
	const { subscribe, set, update } = writable<AudioData>(data, (e) => {
		console.log('subscribed data');
	});

	const setTracklist = (tracklist: Track[]) => update((data) => ({ ...data, tracklist }));
	const setInputTypes = (inputTypes: string[]) => update((data) => ({ ...data, inputTypes }));

	return {
		subscribe,
		setTracklist,
		setInputTypes
	};
};

const audioPlayer = (data: AudioPlayer) => {
	const { subscribe, set, update } = writable<AudioPlayer>(data, (e) => {
		console.log('subscribed player');
	});

	const togglePlay = () => update((data) => ({ ...data, isPlaying: !data.isPlaying }));
	const setTrack = (track: Track) => update((data) => ({ ...data, currentTrack: track }));
	return {
		subscribe,
		togglePlay,
		setTrack
	};
};

export const trackData = trackLibrary(initialData);
export const player = audioPlayer(playerData);

import { writable, derived } from 'svelte/store';

type Track = {
	id: number;
	artist: string;
	genre: string;
	groups: string[];
};

type AudioData = {
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	currentTrack?: Track;
	tracklist: Track[];
	inputTypes: string[];
};

type AudioPlayer = {
	isPlaying: boolean;
	currentTime: number;
	loopDuration: number;
	currentTracks?: Track[];
};

const initialData: AudioData = {
	isPlaying: false,
	currentTime: 0,
	duration: 0,
	currentTrack: {},
	inputTypes: [],
	tracklist: []
};

const playerData: AudioPlayer = {
	isPlaying: false,
	currentTime: 0,
	loopDuration: 0,
	currentTracks: []
};

const trackLibrary = (data) => {
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

const audioPlayer = (data) => {
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

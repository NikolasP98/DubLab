import type { Track } from '$lib/types';

type TrackStore = {
	isLoaded: boolean;
	tracks: Track[];
	inputTypes: string[];
	trackGenres: string[];
};

class createTrackStore {
	private isLoadComplete = $state(false);
	private trackList: Tracks[] = $state([]);

	private inputs = $derived.by((): string[] => {
		const groupSet = new Set();
		for (const track of this.trackList) {
			for (const group of track.groups) {
				groupSet.add(group);
			}
		}

		return Array.from(groupSet);
	});

	private genres = $derived.by((): string[] => {
		const genreSet = new Set();
		for (const track of this.trackList) {
			for (const genre of track.genres) {
				genreSet.add(genre);
			}
		}
		return Array.from(genreSet);
	});

	get tracks(): Track[] {
		return this.trackList;
	}

	get isLoaded(): boolean {
		return this.isLoadComplete;
	}

	get inputTypes(): string[] {
		return this.inputs;
	}

	get trackGenres(): string[] {
		return this.genres;
	}

	set tracks(trackList): void {
		this.trackList = Array.from(trackList);
	}

	reset = (): void => {
		this.trackList = [];
	};
}

export const trackStore: TrackStore = new createTrackStore();

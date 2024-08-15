import type { Track } from '$lib/types';

type TrackStore = {
	isLoaded: boolean;
	tracks: Track[];
	inputTypes: string[];
};

class createTrackStore {
	private #isLoaded = $state(false);
	private #tracks: Tracks[] = $state([]);

	private #inputTypes = $derived.by((): string[] => {
		const groupSet = new Set();
		for (const track of this.#tracks) {
			for (const group of track.groups) {
				groupSet.add(group);
			}
		}

		return Array.from(groupSet);
	});

	get tracks(): Track[] {
		return this.#tracks;
	}

	get isLoaded(): boolean {
		return this.#isLoaded;
	}

	get inputTypes(): string[] {
		return this.#inputTypes;
	}

	set tracks(trackList): void {
		this.#tracks = Array.from(trackList);
	}

	reset = (): void => {
		this.#tracks = [];
	};
}

export const trackStore: TrackStore = new createTrackStore();

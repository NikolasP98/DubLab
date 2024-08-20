import type { Track } from '$lib/types';

type TrackStore = {
	isLoaded: boolean;
	tracks: Track[];
	inputTypes: string[];
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

	get tracks(): Track[] {
		return this.trackList;
	}

	get isLoaded(): boolean {
		return this.isLoadComplete;
	}

	get inputTypes(): string[] {
		return this.inputs;
	}

	set tracks(trackList): void {
		this.trackList = Array.from(trackList);
	}

	reset = (): void => {
		this.trackList = [];
	};
}

export const trackStore: TrackStore = new createTrackStore();

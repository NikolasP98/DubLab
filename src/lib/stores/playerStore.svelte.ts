import type { Track } from '$lib/types';
import { Howl } from 'howler';

type ActiveTrack = {
	track: Track;
	sound: Howl;
};

class AudioPlayer {
	private state: 'PLAY' | 'PAUSE' | 'STOP' | 'RECORDING' = $state('');
	private activeTracks: ActiveTrack[] = $state([]);
	private cTime: number = $state(0);
	private loopDur: number = $state(0);
	private currFilters: string[] = $state([]);

	constructor() {
		this.state = 'STOP';
		this.cTime = 0;
	}

	get playerState() {
		return this.state;
	}

	get currentTracks() {
		return this.activeTracks;
	}

	get filters() {
		return this.currFilters;
	}

	set currentTime(time: number) {
		this.cTime = time;
	}

	private stop = () => {
		if (this.state == 'STOP') return;
		this.activeTracks.forEach((item) => item.sound.stop());
		this.state = 'STOP';
	};

	private play = () => {
		if (this.state == 'PLAY' || this.activeTracks.length < 1) return;

		try {
			this.activeTracks.forEach((item) => item.sound.play());
			this.state = 'PLAY';
		} catch (error) {
			console.error(error);
		}
	};

	toggleFilter = (filter: string): void => {
		const index = this.currFilters.indexOf(filter);

		console.log('index', index);
		if (index !== -1) {
			this.currFilters.splice(index, 1);
		} else {
			this.currFilters = [...this.currFilters, filter];
		}
	};

	toggleTrack = (track: Track): void => {
		const prevState = this.playerState;

		this.stop();
		const index = this.activeTracks.findIndex((item: Track) => item.track.id == track.id);
		if (index !== -1) {
			// Remove the object if it finds a match

			const deleted: ActiveTrack = this.activeTracks.splice(index, 1)[0];
			if (this.activeTracks.length == 0) {
				this.stop();
			}
			// unload the sound  associated with the track
			deleted.sound.unload();
		} else {
			const newTrack: ActiveTrack = { track, sound: new Howl({ src: [track.src], loop: true }) };
			// this.#currentTracks.tracks
			this.activeTracks = [...this.activeTracks, newTrack];

			if (this.activeTracks.length == 1) {
				this.play();
			}
		}

		if (this.activeTracks.length > 0 && prevState == 'PLAY') {
			this.play();
		}
	};

	toggleIO = (): void => {
		if (this.state == 'PLAY') {
			this.stop();
		} else if (this.state == 'STOP') {
			this.play();
		}

		return this.state;
	};
}

export const player = new AudioPlayer();

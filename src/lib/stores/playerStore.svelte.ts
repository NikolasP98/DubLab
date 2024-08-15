import type { Track } from '$lib/types';
import { Howl } from 'howler';

type ActiveTrack = {
	track: Track;
	sound: Howl;
};

type AudioPlayer = {
	playerState: 'PLAY' | 'PAUSE' | 'STOP' | 'RECORDING';
	currentTracks: ActiveTrack[];
	currentTime: number;
	loopDuration: number;
	toggleTrack: (track: Track) => void;
	toggleIO: () => void;
};

class createAudioPlayer {
	private #playerState = $state('STOP');
	private #currentTracks = $state<string[]>([]);
	private #currentTime = $state(0);
	private #loopDuration = $state(0);

	constructor() {}

	get playerState(): 'PLAY' | 'PAUSE' | 'STOP' | 'RECORDING' {
		return this.#playerState;
	}

	get currentTracks(): ActiveTrack[] {
		return this.#currentTracks;
	}

	set currentTracks(tracks: ActiveTrack[]) {
		this.#currentTracks = tracks;
	}

	set currentTime(time: number) {
		this.#currentTime = time;
	}

	toggleTrack = (track: Track) => {
		const index = this.#currentTracks.findIndex((item: ActiveTrack) => item.track.id === track.id);

		if (index !== -1) {
			// Remove the object if it finds a match
			this.#currentTracks = this.#currentTracks.filter((_, i) => {
				this.#currentTracks[index].sound.pause();
				i !== index;
			});

			if (this.#currentTracks.length < 1) {
				this.stop();
			}
		} else {
			const newObject: ActiveTrack = {
				track: track,
				sound: new Howl({
					src: [track.src],
					loop: true
				})
			};

			// Add the new object if it doesn't find a match
			this.#currentTracks = [...this.#currentTracks, newObject];

			if ((this.#currentTracks.length = 1)) {
				this.play();
			}
		}
	};

	private stop = () => {
		this.#playerState = 'STOP';
		if (this.#currentTracks.length < 1) return;
		this.#currentTracks.forEach((track: ActiveTrack) => {
			track.sound.stop();
		});
	};

	private play = () => {
		if (this.#currentTracks.length < 1) return;

		this.#currentTracks.forEach((track: ActiveTrack, i: number) => {
			if (this.#playerState == 'STOP') {
				this.#currentTime = track.sound.duration;
			}

			track.sound.play();
		});
		this.#playerState = 'PLAY';
	};

	toggleIO = () => {
		if (this.#playerState == 'PLAY') {
			this.stop();
		} else if (this.#playerState == 'STOP') {
			this.play();
		}

		return this.#playerState;
	};
}

export const player: AudioPlayer = new createAudioPlayer();

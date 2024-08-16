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

class AudioPlayer {
	private #playerState = $state('STOP');
	private #currentTracks = $state([]);
	private #currentTime = $state(0);
	private #loopDuration = $state(0);

	get playerState() {
		return this.#playerState;
	}

	get currentTracks() {
		return this.#currentTracks;
	}

	set currentTracks(tracks: Track[]) {
		this.#currentTracks = tracks;
	}

	set currentTime(time: number) {
		this.#currentTime = time;
	}

	private stop = () => {
		if (this.#playerState == 'STOP') return;
		this.#currentTracks.forEach((item) => item.sound.stop());
		this.#playerState = 'STOP';
	};

	private play = () => {
		if (this.#playerState == 'PLAY' || this.#currentTracks.length < 1) return;

		try {
			this.#currentTracks.forEach((item) => item.sound.play());
			this.#playerState = 'PLAY';
		} catch (error) {
			console.error(error);
		}
	};

	toggleTrack = (track: Track) => {
		this.stop();

		const index = this.#currentTracks.findIndex((item: Track) => item.track.id == track.id);
		if (index !== -1) {
			// Remove the object if it finds a match
			const deleted: ActiveTrack[] = this.#currentTracks.splice(index, 1);
			deleted[0].sound.unload();
		} else {
			const newTrack: ActiveTrack = { track, sound: new Howl({ src: [track.src] }) };
			// this.#currentTracks.tracks
			this.#currentTracks = [...this.#currentTracks, newTrack];
		}
		// Add the new object if it doesn't find a match

		if (this.#currentTracks.length > 0) {
			this.play();
		}
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

export const player: AudioPlayer = new AudioPlayer();

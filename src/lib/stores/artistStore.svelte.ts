import type { Artist, ArtistStore } from '$lib/types';

class createArtistStore {
	private #artists: Artist[] = $state([]);

	get artists(): Artist[] {
		return this.#artists;
	}

	set artists(artistList: any[]): Artist[] {
		this.#artists = Array.from(artistList);
	}
}

export const artistStore: ArtistStore = new createArtistStore();

export type Track = {
	// track data
	id: string;
	title: string;
	src: string;
	artists: Artist[];
	// artists: string[];
	// duration: number;
	// bpm: number;
	genres: string[];
	groups: string[];

	// file data
	// type: string;
};
export type Artist = {
	// track data
	id: string;
	name: string;

	// file data
	// path: string;
	// type: string;
};

export type ArtistStore = {
	artists: Artist[];
};

export type Track = {
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

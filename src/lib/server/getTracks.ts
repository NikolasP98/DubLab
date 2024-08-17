import PocketBase from 'pocketbase';

export async function getTracks(fetch: typeof globalThis.fetch) {
	try {
		const pb = new PocketBase('https://dl.admin-console.dev');

		const records = await pb.collection('tracks').getFullList({
			sort: '-created',
			expand: 'artists'
		});

		const tracks = records.map((e) => {
			return {
				...e,
				artists: e.expand.artists,
				src: pb.files.getUrl(e, e.audio)
			};
		});

		return tracks;
	} catch (error) {
		return {
			error: `...Failed to GET tracks... ${error}`
		};
	}
}

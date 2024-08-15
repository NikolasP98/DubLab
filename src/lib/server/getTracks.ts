import PocketBase from 'pocketbase';

export async function getTracks(fetch: typeof globalThis.fetch) {
	try {
		const pb = new PocketBase('https://dl.admin-console.dev');

		const records = await pb.collection('tracks').getFullList({
			sort: '-created'
		});

		const tracks = records.map((e) => {
			return {
				id: e.id,
				title: e.title,
				src: pb.files.getUrl(e, e.audio),
				...e
			};
		});

		return tracks;
	} catch (error) {
		return {
			error: `...Failed to GET tracks... ${error}`
		};
	}
}

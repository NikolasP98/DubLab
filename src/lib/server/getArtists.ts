import PocketBase from 'pocketbase';

export async function getArtists(fetch: typeof globalThis.fetch) {
	try {
		const pb = new PocketBase('https://dl.admin-console.dev');

		const records = await pb.collection('artists').getFullList({
			sort: '-created'
		});

		return records;
	} catch (error) {
		return {
			error: `...Failed to GET... ${error}`
		};
	}
}

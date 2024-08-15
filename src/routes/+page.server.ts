import { getArtists } from '$lib/server/getArtists';

export const load = async ({ fetch, params }) => {
	const data = await getArtists();

	return { ...data };
};

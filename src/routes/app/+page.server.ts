import { getTracks } from '$lib/server/getTracks';

export const load = async ({ fetch, params }) => {
	const data = await getTracks();

	return { ...data };
};

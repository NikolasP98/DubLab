// import { SUPABASE_API_KEY } from '$env/static/private';

import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	try {
		// import data from './data.json';
		// const reponse = await fetch(json);

		// const data = await response.json();

		// if (!Array.isArray(data)) {
		// 	throw error(500, 'Invalid data format: JSON should contain an array');
		// }

		return {
			tracks: [SUPABASE_API_KEY]
		};
	} catch (err) {
		throw error(500, `Failed to load track data: ${err.message}`);
	}
};

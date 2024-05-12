export const load = ({ params }) => {
	return {
		post: { id: params.slug },
		title: `Post ${params.id}`
	};
};

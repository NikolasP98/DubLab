export const load = async ({ params }) => {
	return {
		title: 'Hello',
		name: params.name,
		entries: await getEntries()
	};
};

const getEntries = async () => {
	const entries = await (await fetch('https://dummyjson.com/products?select=title,price')).json();
	return entries.products;
};

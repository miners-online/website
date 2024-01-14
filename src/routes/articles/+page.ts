// @ts-ignore TODO: fix typing in Svelte
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/articles/json`);
	const posts = (await response.json()).posts;

	return {
		posts
	};
};

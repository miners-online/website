import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		// @ts-ignore TODO: fix typing
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json({
		posts: sortedPosts
	});
};
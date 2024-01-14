export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/content/articles/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
            // @ts-ignore TODO: fix typing
			const { metadata } = await resolver();
			const postPath = path.slice(12, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
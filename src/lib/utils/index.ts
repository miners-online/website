import fs from 'fs/promises';
import path from 'path';
import { compile } from 'mdsvex';

export interface Article {
	meta: {
		title: string;
		date: string;
	}
	path: string;
	content: {
		raw: string;
		compiled: string;
	}
}

export const prerender = true;

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/content/articles/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([relPath, resolver]) => {
            // @ts-ignore TODO: fix typing
			const { metadata } = await resolver();
			const postPath = relPath.slice(12, -3);

			const absPath = path.join(process.cwd(), relPath);
			const fileContent = await fs.readFile(absPath, 'utf-8');
			const compiled = await compile(fileContent);

			return {
				meta: metadata,
				path: postPath,
				content: {
					raw: fileContent,
					compiled: compiled?.code
				}
			} as Article;
		})
	);

	return allPosts;
};
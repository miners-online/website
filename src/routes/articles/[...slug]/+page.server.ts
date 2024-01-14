import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import fs from 'fs/promises';
import path from 'path';
import { compile } from 'mdsvex';

interface metadata {
	params: {
		slug: string;
	}
}

interface frontmatter {
	title: string;
	date: Date;
}

export const load: PageServerLoad = async ({ params }: metadata) =>{
	const filePath = path.join(process.cwd(), 'src', 'content', 'articles' , `${params.slug}.md`);
	try {
	const fileContent = await fs.readFile(filePath, 'utf-8');
	const compiled = await compile(fileContent);

	return { post: {
		title: ((compiled?.data?.fm as any) as frontmatter).title,
		date: ((compiled?.data?.fm as any) as frontmatter).date,
		content: compiled?.code
	}};
	} catch (err) {
		console.log(err)
		error(404, {
			message: 'Not found',
		});
	}
}

export const prerender = 'auto';

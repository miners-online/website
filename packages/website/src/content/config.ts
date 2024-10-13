import { z, defineCollection, reference } from 'astro:content';

const wikiCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        pubTime: z.string(),
        description: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
        relatedProject: z.optional(reference('projects'))
    }),
});

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        links: z.array(z.object({
            type: z.string(),
            url: z.string()
        }))
    }),
});


export const collections = {
    'wiki': wikiCollection,
    'projects': projectsCollection
};

export const collectionNames = Object.keys(collections) as CollectionName[];

export type CollectionName = keyof typeof collections;
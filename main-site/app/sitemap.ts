import type { MetadataRoute } from 'next';
import { docsSource, blogSource } from '@/lib/source';

export const revalidate = false;

const url = (path: string): string => new URL(path, "https://minersonline.uk").toString();

const docs = docsSource.getPages().map(async (page) => {
  return {
    url: url(page.url),
    lastModified: undefined,
    changeFrequency: 'weekly',
    priority: 0.5,
  } as MetadataRoute.Sitemap[number];
});

const blog = blogSource.getPages().map(async (page) => {
  return {
    url: url(page.url),
    lastModified: page.data.date,
    changeFrequency: 'weekly',
    priority: 0.5,
  } as MetadataRoute.Sitemap[number];
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/blog'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url('/docs'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...(await Promise.all(docs)),
    ...(await Promise.all(blog)),
  ];
}
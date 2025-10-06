import { source, blog } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

const allPages = [
  ...source.getPages(),
  ...blog.getPages(),
];

export const { GET } = createSearchAPI('advanced', {
  language: 'english',
  indexes: allPages.map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
  })),
});

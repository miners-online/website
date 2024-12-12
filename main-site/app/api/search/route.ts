import { docsSource, blogSource } from '@/lib/source';
import { AdvancedIndex, createSearchAPI } from 'fumadocs-core/search/server';
 
let sources: AdvancedIndex[] = []
docsSource.getPages().forEach((page) => (
    sources.push({
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        id: page.url,
        structuredData: page.data.structuredData,
    } as AdvancedIndex)
));

blogSource.getPages().forEach((page) => (
    sources.push({
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        id: page.url,
        structuredData: page.data.structuredData,
    } as AdvancedIndex)
));

export const { GET } = createSearchAPI('advanced', {
  indexes: sources,
});
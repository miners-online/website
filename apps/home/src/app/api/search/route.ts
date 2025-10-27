import { source, blog } from '@/lib/source';
import { AdvancedIndex, createSearchAPI, Dynamic } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('advanced', {
  language: 'english',
  indexes: buildIndexes(),
});

function buildIndexes(): AdvancedIndex[] | Dynamic<AdvancedIndex> {
  let indexes: AdvancedIndex[] = [];

  for (const page of source.getPages()) {
    if (page.data.type == "authentication") {
      indexes.push({
        title: page.data.title || page.data._openapi?.method || "Unknown",
        description: page.data.description,
        url: page.url,
        id: page.url,
        structuredData: { // we don't have structured data for openapi generated pages
          contents: [],
          headings: []
        },
      }); 
    } else {
      indexes.push({
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        id: page.url,
        structuredData: page.data.structuredData,
      });
    }
  }

  for (const page of blog.getPages()) {
    indexes.push({
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: page.data.structuredData,
    });
  }

  return indexes;
}
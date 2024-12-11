import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import {
  defineCollections,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});

export const blog = defineCollections({
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()).optional(),
  }),
  type: 'doc',
});

// source.config.ts
import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true
    }
  },
  meta: {
    schema: metaSchema
  }
});
var blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  // add required frontmatter properties
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.date(),
    category: z.string().optional(),
    image: z.string().optional()
  })
});
var source_config_default = defineConfig({
  mdxOptions: {
    // MDX options
  }
});
export {
  blogPosts,
  source_config_default as default,
  docs
};

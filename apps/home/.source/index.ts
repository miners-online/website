// @ts-nocheck -- skip type checking
import * as docs_2 from "../content/docs/rules.mdx?collection=docs&hash=1759764733673"
import * as docs_1 from "../content/docs/index.mdx?collection=docs&hash=1759764733673"
import * as docs_0 from "../content/docs/faq.mdx?collection=docs&hash=1759764733673"
import * as blogPosts_1 from "../content/blog/github-horror-story.md?collection=blogPosts&hash=1759764733673"
import * as blogPosts_0 from "../content/blog/a-fresh-look-for-miners-online.md?collection=blogPosts&hash=1759764733673"
import { _runtime } from "fumadocs-mdx/runtime/next"
import * as _source from "../source.config"
export const blogPosts = _runtime.doc<typeof _source.blogPosts>([{ info: {"path":"a-fresh-look-for-miners-online.md","fullPath":"content\\blog\\a-fresh-look-for-miners-online.md"}, data: blogPosts_0 }, { info: {"path":"github-horror-story.md","fullPath":"content\\blog\\github-horror-story.md"}, data: blogPosts_1 }]);
export const docs = _runtime.docs<typeof _source.docs>([{ info: {"path":"faq.mdx","fullPath":"content\\docs\\faq.mdx"}, data: docs_0 }, { info: {"path":"index.mdx","fullPath":"content\\docs\\index.mdx"}, data: docs_1 }, { info: {"path":"rules.mdx","fullPath":"content\\docs\\rules.mdx"}, data: docs_2 }], [])
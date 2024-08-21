import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
  title: "Miners Online",

  rewrites: {
    "en/:rest*": ":rest*",
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  sitemap: {
    hostname: "https://minersonline.uk",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  themeConfig: {
    logo: { src: "/favicon.svg", width: 24, height: 24 },

    socialLinks: [{ icon: "github", link: "https://github.com/miners-online" }],

    search: {
      provider: "local",
    },
  },
});

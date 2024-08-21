import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Miners Online",

  rewrites: {
    "en/:rest*": ":rest*",
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  description: "The official website for Miners Online.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      "/minecraft-server/": {
        base: "/minecraft-server/",
        items: sidebarMinecraftServer(),
      },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/miners-online" }],

    search: {
      provider: "local",
    },

    footer: {
      copyright: "Copyright © 2023-present Miners Online",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Home", link: "/" },
    { text: "Blog", link: "/blog" },
    {
      text: "Projects",
      items: [
        {
          text: "Net Bits",
          link: "https://netbits.minersonline.uk/en/latest/",
        },
        { text: "Minecraft Server", link: "/minecraft-server" },
      ],
    },
  ];
}

function sidebarMinecraftServer(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [{ text: "Joining", link: "joining" }],
    },
    {
      text: "Game modes",
      collapsed: false,
      items: [
        { text: "Bed wars", link: "bedwars" },
        { text: "Lobby ", link: "lobby" },
      ],
    },
  ];
}

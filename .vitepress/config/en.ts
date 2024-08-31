import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "The official website for Miners Online.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    editLink: {
      pattern: "https://github.com/miners-online/website/edit/main/:path",
      text: "Edit on GitHub",
    },

    sidebar: {
      "/minecraft-server/": {
        base: "/minecraft-server/",
        items: sidebarMinecraftServer(),
      },
    },

    footer: {
      copyright: `Copyright © 2023-${new Date().getFullYear()}  Miners Online`,
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
    {
      text: "Legacy",
      collapsed: true,
      items: [
        { text: "Lobby ", link: "legacy/lobby" },
      ],
    },
  ];
}

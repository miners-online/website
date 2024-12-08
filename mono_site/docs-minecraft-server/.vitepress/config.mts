import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/minecraft-server/',
  title: "Miners Online / Minigames",
  description: "The modern Minecraft minigame network from Miners Online",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/get-started' },
      { text: 'Main Home', link: 'https://minersonline.uk' },
    ],

    sidebar: [
      {
        text: 'Get started',
        link: '/get-started'
      },
      {
        text: 'The team',
        link: '/team'
      },
      {
        text: 'v0.1.0',
        items: [
          {
            text: 'Games',
            items: [
              {
                text: 'Lobby',
                link: '/v0.1.0/games/lobby'
              },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/miners-online' }
    ],

    search: {
      provider: 'local'
    }
  },
  sitemap: {
    hostname: 'https://minersonline.uk/minecraft-server'
  }
})

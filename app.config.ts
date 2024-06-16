export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Miners Online',
      description: 'The official website for Miners Online.',
    },
    header: {
      title: 'Miners Online',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/favicon.svg',
        dark: '/favicon.svg',
      },
      nav: [
        {
          title: 'Blog',
          to: '/blog',
          target: undefined,
        },
        {
          title: 'Projects',
          links: [
            {
              title: 'Net Bits',
              to: 'https://netbits.minersonline.uk/en/latest/',
              description: 'Convert data into structured packets and make packet handling a breeze!',
              target: '_blank',
            },
            {
              title: 'Minecraft Server',
              to: '/minecraft-server',
              description: 'Play with your friends',
              target: undefined,
            }
          ],
        }
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/miners-online/website-v5',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2023 - 2024 Miners Online',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/miners-online/website-v5',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/miners-online/website-v5',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/miners-online/website-v5/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});
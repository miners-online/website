export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Miners Online',
      description: 'Official site for Miners Online',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
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
          title: 'Docs',
          links: [
            {
              title: 'Minecraft Server',
              to: '/minecraft-server',
              description: 'An open-source Minestom-powered Minecraft: Java Edition server in development.',
            },
            {
              title: 'Net Bits',
              to: 'https://netbits.minersonline.uk',
              description: 'Net Bits is a Python package that simplifies data conversion into structured network packets and includes utilities for easy packet processing.',
              target: "_blank"
            }
          ]
        },
        {
          title: 'Community',
          links: [
            {
              title: 'Blog',
              to: '/blog',
              description: 'A collaborative blog about Miners Online and what we have been up to.',
            },
            {
              title: 'Miners Online GitHub',
              to: 'https://github.com/miners-online',
              target: '_blank',
            }
          ]
        },
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/miners-online',
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
      credits: `Copyright © 2023 - ${new Date().getFullYear()} Samuel Hulme`,
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/miners-online',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Discuss on GitHub',
        icon: 'lucide:cloud',
        to: 'https://github.com/orgs/miners-online/discussions',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/miners-online/.github/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});
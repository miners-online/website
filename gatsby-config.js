module.exports = {
  siteMetadata: {
    title: 'Miners Online',
    description: 'The official website for Miners Online',
    keywords: 'miners,online,minecraft',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Miners Online',
        icon: 'src/images/favicon.svg',
        short_name: 'Miners online',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl:
            'https://github.com/Miners-Online/website',
          subDirectory: '',
        },
      },
    },
  ],
};

module.exports = {
  pwa: {
    name: 'Doekoe',
    short_name: 'Doekoe',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#243447',
    background_color: '#243447',
    description: 'Get insights on the Doekoes you spend or receive.',
    icons: [
      {
        src: '/img/icons/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
        density: '0.75'
      },
      {
        src: '/img/icons/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
        density: '1.0'
      },
      {
        src: '/img/icons/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        density: '1.5'
      },
      {
        src: '/img/icons/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        density: '2.0'
      },
      {
        src: '/img/icons/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        density: '3.0'
      },
      {
        src: '/img/icons/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0'
      }
    ],
    themeColor: '#57b370',
    msTileColor: '#57b370'
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [],
    },
  },
  configureWebpack: {
    plugins: [],
  },
};

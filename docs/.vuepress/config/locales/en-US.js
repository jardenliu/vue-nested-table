module.exports = {
  '/': {
    selectText: 'Languages',
    label: 'English',
    ariaLabel: 'Languages',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    backToTop: true,
    smoothScroll: true,
    logo: '/assets/logo.png',
    lastUpdated: 'lastUpdated',
    repo: 'https://github.com/jardenliu/vue-nested-table',
    editLinks: false,
    algolia: {},
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Docs',
        link: '/docs/'
      },
      {
        text: 'Github',
        link: 'https://github.com/jardenliu/vue-nested-table'
      }
    ],
    sidebar: {}
  }
}

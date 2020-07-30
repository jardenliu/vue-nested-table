module.exports = {
  '/zh/': {
    // 多语言下拉菜单的标题
    selectText: '选择语言',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    // 编辑链接文字
    editLinkText: '在 GitHub 上编辑此页',
    // Service Worker 的配置
    serviceWorker: {
      updatePopup: {
        message: '发现新内容可用.',
        buttonText: '刷新'
      }
    },
    // 当前 locale 的 algolia docsearch 选项
    algolia: {},
    backToTop: true,
    smoothScroll: true,
    logo: '/assets/logo.png',
    lastUpdated: 'lastUpdated',
    repo: 'https://github.com/jardenliu/vue-nested-table',
    editLinks: false,
    algolia: {},
    nav: [
      {
        text: '首页',
        link: '/zh/'
      },
      {
        text: '文档',
        link: '/zh/docs/'
      },
      {
        text: 'Github',
        link: 'https://github.com/jardenliu/vue-nested-table'
      }
    ],
    sidebar: {}
  }
}

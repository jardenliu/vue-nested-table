const { name, description } = require('../../package.json')
const { resolve } = require('path')
const CodeDocPlugin = require('vuepress-plugin-code-doc')
const configureWebpack = require('./config/webpack')
const locales = require('./locales')
const cfgLocales = require('./config/locales')

module.exports = {
  title: 'vue-nested-table',
  base: `/${name}/`,
  description: 'a lightweight and high quality nested table component',
  theme: 'antdocs',
  locales: locales,
  themeConfig: {
    locales: cfgLocales,
    nav: []
  },
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // All options of ts-loader
        }
      }
    ],
    [CodeDocPlugin, {}]
  ],
  configureWebpack
}

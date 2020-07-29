const {
  resolve
} = require('path')


module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts'
    }
  },

  outputDir: 'pages',
  publicPath: '',

  configureWebpack: config => {
    config.resolve.extensions = ['.ts', '.tsx', '.vue', '.mjs', '.js', '.jsx', '.json', '.wasm']
    config.resolve.modules.push(resolve(__dirname, 'examples'))
    config.resolve.alias['vue-nested-table'] = resolve(__dirname, 'packages')
  },


  css: {
    extract: process.env.NODE_BUILD_SIGN !== 'lib'
  }
}
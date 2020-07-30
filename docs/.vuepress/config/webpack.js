const { resolve } = require('path')

module.exports = config => {
  config.resolve.extensions = [
    '.ts',
    '.tsx',
    '.vue',
    '.mjs',
    '.js',
    '.jsx',
    '.json',
    '.wasm'
  ]
  config.resolve.modules.push(resolve(__dirname, '..', 'examples'))
  config.resolve.alias['vue-nested-table'] = resolve(
    __dirname,
    '..',
    'packages'
  )
}

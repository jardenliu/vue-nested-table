// babel.config.js
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
        corejs: {
          version: 2
        }
      }
    ]
  ]
}

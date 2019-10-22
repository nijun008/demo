const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    name: 'vue_api',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
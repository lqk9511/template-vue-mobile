const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '/', dir)
}
module.exports = {
  publicPath: '/',
  productionSourceMap: process.env.NODE_ENV !== 'development',
  devServer: {},
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]-[hash]'
        },
        localsConvention: 'camelCaseOnly'
      },
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  },
  configureWebpack: config => {
    config.resolve.modules.push(resolve('src'))
  }
}

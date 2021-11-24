const packageName = require('./package.json').name;
module.exports = {
  lintOnSave: false,  // 关闭eslint检测
  devServer: {
      port: 8081,//这里的端口是必须和父应用配置的子应用端口一致
      headers: {
          //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
          'Access-Control-Allow-Origin': '*'
      }
  },
  configureWebpack: {
      output: {
          // 微应用的包名，这里与主应用中注册的微应用名称一致
          library: `${packageName}-[name]`,
          // 将你的 library 暴露为所有的模块定义下都可运行的方式
          libraryTarget: 'umd',
          // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
          jsonpFunction: `webpackJsonp_${packageName}`,
      }
  }
}

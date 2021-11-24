import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: "vue-app", // 应用的名字
    entry: "//localhost:8081", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#container", // 容器id
    activeRule: "/#/child" // 根据路由 激活的路径
  },
]);
start();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

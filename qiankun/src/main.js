import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, initGlobalState } from 'qiankun';
import appList from './app.config.js'

import llo from 'llo'
import 'llo/lib/llo.css'
Vue.use(llo)



// 初始化 参数 state，state一定要起名初始化，这里我监听的是params
const actions = initGlobalState({ params: '' });
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('获取子组件传过来的数据', state, prev);
});

// 给子组件发送数据的方法
Vue.prototype.$set = actions.setGlobalState
actions.setGlobalState({
  chlid:999
})
// 注册子应用
registerMicroApps(appList);
start()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

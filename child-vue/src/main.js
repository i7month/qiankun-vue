import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance = null
function render () {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#vueApp'); // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去
}

if (window.__POWERED_BY_QIANKUN__) { // 动态添加publicPath
  /* global __webpack_public_path__:writable */
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) { // 默认独立运行
  render();
}

// 父应用加载子应用，子应用必须暴露三个接口：bootstrap、mount、unmount
export async function bootstrap (props) {
  console.log('bootstrap', props);
}

export async function mount (props) {
  console.log('mount', props);
  // 将获取参数方法挂载到全局
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  Vue.prototype.$setGlobalState = props.setGlobalState;
  render(props)
  // 注册观察者函数   获取主应用传递过来的参数
  // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
  props.onGlobalStateChange((state) => {
    console.log(state, '子获取参数');
  }, true)
}

export async function unmount (props) {
  console.log('unmount', props);
  instance.$destroy();
}

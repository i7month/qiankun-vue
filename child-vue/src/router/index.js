import Vue from 'vue'
import VueRouter from 'vue-router'
// 判断是否是qiankun 主项目过来的 如果是主项目过来的 需要在前面加上 /child/ 
console.log(window.__POWERED_BY_QIANKUN__,'window.__POWERED_BY_QIANKUN__');
let Front = window.__POWERED_BY_QIANKUN__ ? '/child/' : '/';

Vue.use(VueRouter)

const routes = [
  {
    // Front === /xxx/ 去掉最后一位 /
    path: Front === '/' ? Front : Front.substring(0, Front.length - 1), 
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: Front + 'About',
    name: 'home',
    component:  () => import('../views/About.vue')
  },
  {
    path: Front + 'vue',
    name: 'about',
    component: () => import('../views/Home.vue')
  }
]
const router = new VueRouter({
  routes
})

if (window.__POWERED_BY_QIANKUN__) {
  // 路由全局守卫
  router.beforeEach((to, from, next) => {
    // 判断要跳转的路由是否带 /child 
    console.log(to.path);
    if (!to.path.includes("/child")) {
      // 如果带 /child  就拼接/child后 next 
      if(to.path === '/') return next()
      next({path: "/child" + to.path})
    } else {
      next()
    }
  })
}

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hover',
    component: Home
  }
]

const router = new VueRouter({
  base: '',
  routes
})

export default router

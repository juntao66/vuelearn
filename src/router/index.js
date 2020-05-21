import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/About.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/demo.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass:'active',
  routes
})

export default router

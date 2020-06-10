import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/display',
    component: () => import('../views/display')
  },
  {
    path: '/notice',
    component: () => import('../views/notice')
  },
  {
    path: '/form',
    component: () => import('../views/form')
  },
  {
    path: '/tablerender',
    component: () => import('../views/table-render')
  },
  {
    path: '/demo',
    component: () => import('../views/demo')
  }
]

const router = new VueRouter({
  routes
})

export default router

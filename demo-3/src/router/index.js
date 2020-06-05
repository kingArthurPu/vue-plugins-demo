import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/display',
    component: () => import('../views/display')
  }
]

const router = new VueRouter({
  routes
})

export default router

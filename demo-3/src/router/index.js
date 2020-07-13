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
  },
  {
    path: '/list',
    component: () => import('../views/list')
  },
  {
    path: '/tableslot1',
    component: () => import('../views/table-slot1')
  },
  {
    path: '/tableslot2',
    component: () => import('../views/table-slot2')
  },
  {
    path: '/tableslot3',
    component: () => import('../views/table-slot3')
  },
  {
    path: '/tree',
    component: () => import('../views/tree')
  },
  {
    path: '/display2',
    component: () => import('../views/display2')
  }
]

const router = new VueRouter({
  routes
})

export default router

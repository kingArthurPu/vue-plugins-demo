import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '../views/A'
Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    component:A
  }
]

const router = new VueRouter({
  routes
})

export default router

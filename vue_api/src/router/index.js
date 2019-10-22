import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/slotDemo',
      name: 'slotDemo',
      component: () => import('@/views/slotDemo')
    },
  ]
})
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/slotDemo',
      name: 'slotDemo',
      component: () => import('@/views/slotDemo'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/menuView',
      name: 'menuView',
      component: () => import('@/views/menuView'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/vModel',
      name: 'vModel',
      component: () => import('@/views/vModel')
    },
  ]
})
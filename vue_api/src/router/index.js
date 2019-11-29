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
        keepAlive: true,
        title: '主页'
      }
    },
    {
      path: '/slotDemo',
      name: 'slotDemo',
      component: () => import('@/views/slotDemo'),
      meta: {
        keepAlive: true,
        title: '插槽slot'
      }
    },
    {
      path: '/menuView',
      name: 'menuView',
      component: () => import('@/views/menuView'),
      meta: {
        keepAlive: true,
        title: '递归菜单栏'
      }
    },
    {
      path: '/vModel',
      name: 'vModel',
      component: () => import('@/views/vModel'),
      meta: {
        keepAlive: true,
        title: '自定义组件v-model'
      }
    },
  ]
})
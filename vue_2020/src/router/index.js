import { createRouter, createWebHashHistory } from 'vue-router'

let routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: () => import('@/views/index/index.vue') },
  { path: '/category', component: () => import('@/views/category/index.vue') },
  { path: '/list', component: () => import('@/views/list/index.vue') },
  { path: '/detail', component: () => import('@/views/detail/index.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
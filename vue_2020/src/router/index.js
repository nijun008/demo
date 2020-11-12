import { createRouter, createWebHashHistory } from 'vue-router'

let routes = [
  { 
    path: '/',
    redirect: '/nav'
  },
  { 
    path: '/nav',
    name: 'nav',
    component: () => import('@/views/nav'),
    meta: {
      title: '首页',
      show: true
    }
  },
  { 
    path: '/ana',
    name: 'ana',
    component: () => import('@/views/ana'),
    meta: {
      title: '一句话',
      show: true
    }
  },
  { 
    path: '/rubbish',
    name: 'rubbish',
    component: () => import('@/views/rubbish'),
    meta: {
      title: '垃圾分类',
      show: true
    }
  },
  { 
    path: '/404', 
    component: () => import('@/views/404') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
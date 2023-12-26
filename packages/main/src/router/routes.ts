import vue2 from './vue2'
import vue3 from './vue3'
import react from './react'

export default [
  {
    path: '/home',
    name: 'Home',
    meta: { title: '首页' },
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: { title: '详情页' },
    component: () => import('../views/detail/index.vue')
  },
  ...vue2,
  ...vue3,
  ...react
]

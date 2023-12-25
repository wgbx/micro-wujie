import vue3 from './vue3'

export default [
  {
    path: '/admin',
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
  ...vue3
]

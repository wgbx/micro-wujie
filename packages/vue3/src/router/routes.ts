export default [
  {
    path: '/vue3',
    name: 'Home',
    meta: { title: '首页' },
    component: () => import('../views/home/index.vue')
  }
]

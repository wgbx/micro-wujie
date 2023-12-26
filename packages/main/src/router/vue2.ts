const app = 'vue2'
const component = () => import('@/views/subApplication/vue2/index.vue')

export default [
  {
    path: '/vue2',
    name: 'Vue2',
    meta: { title: 'vue2子应用', app },
    component
  }
]

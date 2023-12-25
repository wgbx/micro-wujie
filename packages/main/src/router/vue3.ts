const app = 'vue3'
const component = () => import('@/views/subApplication/vue3/index.vue')

export default [
  {
    path: '/vue3',
    name: 'Vue3',
    meta: { title: 'vue3子应用', app },
    component
  }
]

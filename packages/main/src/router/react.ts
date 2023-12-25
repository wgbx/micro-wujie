const app = 'react'
const component = () => import('@/views/subApplication/react/index.vue')

export default [
  {
    path: '/react',
    name: 'React',
    meta: { title: 'react子应用', app },
    component
  }
]

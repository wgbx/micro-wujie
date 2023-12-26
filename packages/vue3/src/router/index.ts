import { createRouter, createWebHistory } from 'vue-router'
import each from './each'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

each(router)

export default router

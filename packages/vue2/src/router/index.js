import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  mode: 'history',
  base: '/vue2',
  routes
})

Vue.use(VueRouter)
export default router

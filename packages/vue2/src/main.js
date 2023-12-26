import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'modern-css-reset'
import './style/index.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import { createApp } from 'vue'
import WujieVue from 'wujie-vue3'
import App from './App.vue'
import element from './lib/element'
import 'modern-css-reset'
import './style/index.scss'
import 'uno.css'
import router from './router'
import store from './store'
import { isInWujie, useWujie } from 'wujie'
import 'virtual:svg-icons-register'

const app = createApp(App)
element(app)
app.use(WujieVue).use(router).use(store).mount('#app')

if (isInWujie) {
  useWujie('vue3', router)
  window.$wujie.bus.$emit('__VUE_DEVTOOLS__', '3', window)
}

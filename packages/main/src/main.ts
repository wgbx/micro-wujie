import { createApp } from 'vue'
import WujieVue from 'wujie-vue3'
import App from './App.vue'
import element from './lib/element'
import 'modern-css-reset'
import './style/index.scss'
import 'uno.css'
import router from './router'
import store from './store'
import 'virtual:svg-icons-register'

const app = createApp(App)
element(app)
app.use(WujieVue).use(router).use(store).mount('#app')

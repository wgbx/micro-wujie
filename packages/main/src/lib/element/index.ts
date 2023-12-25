import ElementPlus from 'element-plus'
import 'element-plus/es/components/message/style/css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import type { App } from 'vue'

export default (app: App<Element>) => {
  app.use(ElementPlus, {
    locale: zhCn,
    zIndex: 2000
  })
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
import { useWujieStore } from './modules/wujie'

export default createPinia()

export { useAppStore, useWujieStore }

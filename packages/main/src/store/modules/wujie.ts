import { defineStore } from 'pinia'
import WujieVue from 'wujie-vue3'

const { bus } = WujieVue

interface WujieStore {
  currentApp: string
}

export const useWujieStore = defineStore({
  id: 'wujie',
  state: (): WujieStore => ({
    currentApp: ''
  }),
  actions: {
    setCurrentApp(name: string) {
      this.currentApp = name
    },
    emit(event: string, ...arg: any[]) {
      console.log('🚀 ~ file: wujie.ts:20 ~ emit ~ event:', event)
      bus.$emit(event, this.currentApp, ...arg)
    },
    rowEmit(event: string, ...arg: any[]) {
      bus.$emit(event, ...arg)
    }
  }
})

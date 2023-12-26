<script setup lang="ts">
import WujieVue from 'wujie-vue3'
import { useWujieStore } from '@/store'

const appName = 'vue2'
const appNamePath = 'vue2'

defineOptions({ name: 'vue2App' })

const wujieStore = useWujieStore()
const route = useRoute()

const url = computed(() => `http://vue2.wujie.cn/${appNamePath}${route.fullPath}`)
console.log('🚀 ~ file: index.vue:16 ~ url ~ url:', url.value, route.fullPath)

function handleBeforeLoad() {
  wujieStore.setCurrentApp(appName)
}

function handleActivated() {
  wujieStore.setCurrentApp(appName)
}
function handleDeactivated() {
  wujieStore.setCurrentApp('')
}
</script>

<template>
  <WujieVue
    :name="appName"
    :url="url"
    alive
    :before-load="handleBeforeLoad"
    :activated="handleActivated"
    :deactivated="handleDeactivated"
    :props="{}"
  />
</template>

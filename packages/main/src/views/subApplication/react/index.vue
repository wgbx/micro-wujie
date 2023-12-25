<script setup lang="ts">
import WujieVue from 'wujie-react'
import { useWujieStore } from '@/store'

const appName = 'react'
const appNamePath = 'react'

defineOptions({ name: 'reactApp' })

const wujieStore = useWujieStore()
const route = useRoute()

const url = computed(() => `http://react.wujie.cn/${appNamePath}${route.fullPath}`)
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

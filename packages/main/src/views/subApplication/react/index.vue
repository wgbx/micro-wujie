<script setup lang="ts">
import WujieVue from 'wujie-vue3'
import { useWujieStore } from '@/store'
import { URL_MAP } from '@/constant'

const appName = 'react'
const appNamePath = 'react'

defineOptions({ name: 'reactApp' })

const wujieStore = useWujieStore()
const route = useRoute()

const url = computed(() => `${URL_MAP[appName]}${appNamePath}${route.fullPath}`)

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

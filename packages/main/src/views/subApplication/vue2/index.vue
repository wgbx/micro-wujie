<script setup lang="ts">
import WujieVue from 'wujie-vue3'
import { useWujieStore } from '@/store'
import { URL_MAP } from '@/constant'

const appName = 'vue2'
const appNamePath = 'vue2'

defineOptions({ name: 'vue2App' })

const wujieStore = useWujieStore()
const route = useRoute()

const url = computed(() => `${URL_MAP[appName]}${appNamePath}${route.fullPath}`)

function handleBeforeLoad() {
  setCurrentApp(appName)
}

function handleActivated() {
  setCurrentApp(appName)
}
function handleDeactivated() {
  setCurrentApp('')
}

function setCurrentApp(appName: string) {
  wujieStore.setCurrentApp(appName)
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

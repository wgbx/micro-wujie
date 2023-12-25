<script setup lang="ts">
const error = window._APP_ERR_DATA

function handlePageReload() {
  location.reload()
}
</script>

<template>
  <div class="w-screen h-screen fs-28 text-center">
    <van-icon class="mt-100 fs-256 c-#f76260" name="warning" />
    <div class="mt-50 mb-50 fs-36">{{ error.title }}</div>
    <div class="mt-40 c-6">以下信息用于技术人员排查异常</div>
    <div class="m-20 p-10 bg-#aaa">{{ error.info }}</div>
    <van-button
      plain
      class="bottom-80 left-0 right-0 w-200 p-20 b-#0d98f5 c-#0d98f5 rd-8 fs-26 fixed h-76 m-auto"
      @click="handlePageReload"
    >
      刷新页面
    </van-button>
  </div>
</template>

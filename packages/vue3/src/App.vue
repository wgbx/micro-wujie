<script setup lang="ts">
defineOptions({ name: 'App' })
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-image: linear-gradient(yellow, pink);

  .svg-icon {
    font-size: 140px;
    color: #0076ff;
    animation: 2.5s rotation infinite linear;
  }

  .page-routers {
    display: flex;
    width: 250px;
    justify-content: space-between;
    margin: 40px 0;
    line-height: 60px;
    color: #0076ff;
    text-underline-offset: 10px;
    text-decoration: underline;
  }
}

@keyframes rotation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(-1, 1);
  }

  100% {
    transform: scale(1);
  }
}
</style>

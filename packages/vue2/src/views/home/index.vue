<script>
export default {
  name: 'Home',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div>
    <div>vue2</div>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<style lang="scss" scoped>
button {
  margin: 40px 0;
  padding: 0 40px;
}
</style>

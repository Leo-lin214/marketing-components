<template>
<section class="app-section">
  <header>{{ $route.name }}</header>
  <router-view></router-view>
</section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
header {
  text-align: center;
  padding: 15px 0;
  font-size: 24px;
  background-color: #3b3bda;
  opacity: 0.8;
  color: #ffffff;
  // border-bottom: 1px solid black;
}
</style>

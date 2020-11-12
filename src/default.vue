<template>
<section class="default-section">
  <p
    v-for="(listItem, listIndex) in list"
    :key="listIndex"
    @click="$router.push(listItem.path)"
  >
    {{ listItem.name }}
  </p>
</section>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
      list: [
        { name: '老虎机', path: '/tigers' },
        { name: '抓娃娃', path: '/grab' }
      ]
    }
  }
}
</script>

<style lang="scss">
.default-section {
  padding: 20px 30px;
  p {
    margin: 0;
    margin-bottom: 20px;
    padding: 15px;
    padding-left: 20px;
    background: #8080f3;
    // opacity: 0.3;
    border-radius: 20px;
    color: #ffffff;
  }
}
</style>

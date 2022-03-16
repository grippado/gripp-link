<template>
  <div id="default">
    <Nuxt />
    <VFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VDefault'
})
</script>

<style lang="sass" scoped>
  #default
    height: 100%
    overflow: hidden
</style>

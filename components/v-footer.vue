<template>
  <footer>
    <p>
      made with <a href="https://github.com/vuejs/vue">vue</a> |
      <a href="https://github.com/nuxt/nuxt.js">nuxt</a> |
      color palette by <a href="https://github.com/dracula/dracula-theme">dracula</a> |
      <a href="https://gripp.link">gripp.link</a><span> © </span>2022
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ReturnDormeDorme'
})
</script>

<style lang="sass">
footer
  display: flex
  width: 100%
  justify-content: center
  align-items: center
  height: 40px
  p
    font-weight: regular
    font-size: 1.5rem
    color: $color-foreground
    span
      font-size: 2.2rem
    a
      font-size: 1.5rem
      color: $color-foreground
</style>

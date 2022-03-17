<template>
  <footer>
    <p>made with&nbsp;<a href="https://github.com/vuejs/vue">vue</a>&nbsp;|&nbsp;<a href="https://github.com/nuxt/nuxt.js">nuxt</a></p>
    <p>color palette by&nbsp;<a href="https://github.com/dracula/dracula-theme">dracula</a></p>
    <p><a href="https://gripp.link">gripp.link</a><span> © </span>2022</p>
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
  justify-content: center
  align-items: center
  height: 40px
  p
    font-weight: normal
    font-size: 1.5rem
    color: $color-foreground
    margin-right: 1rem
    display: flex
    &:not(:last-child)
      &:after
        content: '|'
        padding-left: 1rem
    span
      display: block
      margin: 0 1rem
      transform: scale(1.5)
    a
      font-size: 1.5rem
      color: $color-foreground
@media screen and (max-width: $mobile-break)
  footer
    flex-direction: column
    height: 110px
    p
      margin-bottom: 1rem
      &:after
        display: none
</style>

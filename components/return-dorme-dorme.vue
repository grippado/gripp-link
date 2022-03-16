<template>
  <div class="box">
    <span class="f-pink">Dorme dorme, um soninho</span>
    <span class="f-cyan">Dorme dorme, a papa</span>
    <span class="f-green">Dorme dorme, fecha os olhos</span>
    <span class="f-purple">Dorme dorme, pra sonhar</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ReturnDormeDorme'
})
</script>

<style lang="sass">
.box
  display: flex
  flex-direction: column
  flex-grow: 1
  margin-bottom: 7px
  span
    font-size: $text-size
    margin-bottom: 7px
</style>

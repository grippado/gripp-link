<template>
  <div class="box">
    <span class="f-foreground">command not found: {{ $store.state.input }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ReturnHelp'
})
</script>

<style lang="sass">
.box
  display: flex
  flex-direction: column
  flex-grow: 1
  margin-bottom: 7px
  span
    font-size: 2rem
</style>

/* eslint-disable vue/valid-v-for */
<template>
  <div class="box">
    <span
      v-for="(hist, index) in calledHistory"
      :key="index"
      class="f-foreground"
    >
      {{ index }}: {{ hist }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ReturnHistory',
  data () {
    return {
      calledHistory: []
    }
  },
  mounted () {
    this.calledHistory = JSON.parse(sessionStorage.getItem('history') as string)
    console.log(this.calledHistory[0])
  }
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
    margin-bottom: 7px
</style>

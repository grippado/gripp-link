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
    this.calledHistory = this.$store.state.history
    console.log(this.calledHistory[0])
  }
})
</script>

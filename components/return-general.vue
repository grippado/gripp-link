/* eslint-disable vue/valid-v-for */
<template>
  <div class="box">
    <span
      v-for="(items, index) in comandFinder[getInput].body"
      :key="index"
      class="f-foreground"
    >
      {{ items }}
    </span>
  </div>
</template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Returns from '@/assets/js/returns'

export default Vue.extend({
  name: 'ReturnGeneral',
  data () {
    return {
      comandFinder: Returns
    }
  },
  computed: {
    ...mapGetters([
      'getInput'
    ])
  }
})
</script>

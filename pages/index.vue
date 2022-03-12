<template>
  <div
    id="term"
    @blur="gotFocus"
  >
    <InputLine
      :user="user"
      :blur="gotFocus"
    />
    <ReturnHistory v-if="$store.state.isHistory" />
    <ReturnNotFound v-if="$store.state.isNotFound" />
    <ReturnDormeDorme v-if="$store.state.isDorme" />
    <ReturnGeneral v-if="$store.state.isGeneral" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VIndex',
  data: () => ({
    user: 'grippado'
  }),
  methods: {
    gotFocus () {
      (this.$el.querySelector('.line .input input') as HTMLElement).focus()
    }
  }
})
</script>

<style lang="sass">
#term
  background-color: $color-background
  min-height: 100vh
  padding: 15px
  .line
    display: flex
    flex-grow: 1
    span
      font-size: 2rem
    .input
      position: relative
      margin-left: 5px
      flex-grow: 1
      i
        position: absolute
        width: 1px
        height: 100%
        background-color: $color-foreground
        left: 18px
        top: 0
        animation-name: blink
        animation-duration: 800ms
        animation-iteration-count: infinite
        opacity: 1
      input
        background-color: $color-background
        font-size: 2rem
        color: $color-foreground
        width: calc( 100% - 20px )
        &:focus + i
          display: none
@keyframes blink
  from
    opacity: 1
  to
    opacity: 0
</style>

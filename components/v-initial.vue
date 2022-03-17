<template>
  <div id="initial-overlay">
    <div id="initial-modal">
      <div class="top-bar">
        <span />
        <span />
        <span />
      </div>
      <section>
        Welcome to my terminal/personal website!
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VInitial',
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
#initial-overlay
  width: 100vw
  height: 100vh
  background: rgba($color-purple, 0.8)
  position: fixed
  top: 0
  left: 0
  z-index: 777

#initial-modal
  background-color: $color-background
  min-height: 94%
  margin: 1rem
  border-radius: .75rem
  box-shadow: 0 0 1rem 2px rgba(102,102,102,1)
  width: 500px
  min-height: 300px
  position: absolute
  top: 50%
  left: 50%
  margin: -150px 0 0 -250px
  .top-bar
    width: 100%
    height: 2.5rem
    background: $color-selection
    border-radius: .75rem .75rem 0 0
    display: flex
    align-items: center
    span
      width: 1rem
      height: 1rem
      border-radius: 50%
      display: block
      margin-left: 1rem
      &:nth-child(1)
        background: $color-pink
      &:nth-child(2)
        background: $color-orange
      &:nth-child(3)
        background: $color-cyan

@media screen and (max-width: $mobile-break)
  #term
    min-height: calc(100% - 140px)

@keyframes blink
  from
    opacity: 1
  to
    opacity: 0
</style>

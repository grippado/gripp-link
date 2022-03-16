<template>
  <div
    id="term"
    @blur="gotFocus"
  >
    <div class="top-bar">
      <span />
      <span />
      <span />
    </div>
    <section>
      <InputLine
        :user="user"
        :blur="gotFocus"
      />
      <ReturnHistory v-if="$store.state.isHistory" />
      <ReturnNotFound v-if="$store.state.isNotFound" />
      <ReturnDormeDorme v-if="$store.state.isDorme" />
      <ReturnGeneral v-if="$store.state.isGeneral" />
    </section>
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
#__nuxt
  display: flex
  flex-direction: column
  height: 100vh
  background: $color-comment
  #__layout
    height: 100%

#term
  background-color: $color-background
  min-height: 94%
  margin: 1rem
  border-radius: .75rem
  box-shadow: 0 0 1rem 2px rgba(102,102,102,1)
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

  section
    padding: 1rem
    .line
      display: flex
      flex-grow: 1
      span
        font-size: $text-size
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
          font-size: $text-size
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

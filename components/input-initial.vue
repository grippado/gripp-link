<template>
  <div class="line">
    <div class="input">
      <span class="f-foreground">{{ question }}</span>
      <input
        v-model="inputInitial"
        @keyup.enter="onEnter"
        @blur="blur"
      >
      <i />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'InputLIne',
  props: {
    blur: {
      type: Function,
      required: true
    }
  },

  data: () => ({
    question: '',
    first_question: 'Welcome to my terminal, this is Gabriel Gripp\'s personal website, for starters, you need to accept and want to use this terminal, do you accept? (Yes/No)',
    second_question: 'Why not? ☹️ Do you hate me? 😔 (yes/no)',
    third_question: '😔 Please I promise it\'s a cool site, shall we check it out? (yes/no)',
    fourty_question: 'Cool, lets go to the site! 😊',
    fifty_question: 'Okay, but I\'m going to the site, sorry, but you other option is close the tab! 😢',
    inputInitial: ''
  }),

  computed: {
    ...mapGetters([
      'getInputInitial'
    ])
  },
  mounted () {
    (this.$el.querySelector('.input input') as HTMLElement).focus()
    this.question = this.first_question
  },
  methods: {
    ...mapMutations([
      'setInputInitial'
    ]),
    onEnter () {
      if (this.inputInitial === 'yes') {
        if (this.question === this.second_question) {
          this.question = this.third_question
          this.inputInitial = ''
          return false
        }
        this.question = this.fourty_question
        this.setTimer()
      }
      if (this.inputInitial === 'no') {
        if (this.question === this.second_question) {
          this.question = this.fourty_question
          this.setTimer()
          return false
        }
        if (this.question === this.third_question) {
          this.question = this.fifty_question
          this.setTimer()
          return false
        }
        this.question = this.second_question
      }
      this.inputInitial = ''
    },
    setTimer () {
      setTimeout(() => {
        this.setInputInitial(false)
      }, 4000)
      this.inputInitial = '3'
      setTimeout(() => { this.inputInitial = '3' }, 1000)
      setTimeout(() => { this.inputInitial = '2' }, 2000)
      setTimeout(() => { this.inputInitial = '1' }, 3000)
    }
  }
})
</script>

<style lang="sass">
section
  margin: 1rem
  .line,
  .oldline
    display: flex
    flex-grow: 1
    margin-bottom: 7px
    span
      font-size: $text-size
    .input
      position: relative
      margin-left: 5px
      flex-grow: 1
      text-transform: lowercase
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
    &.disabled
      .input
        input,
        i
          display: none
          opacity: 0

@media screen and (max-width: $mobile-break)
  section
    .line,
    .oldline
      span
        font-size: $text-size-mobile
      .input
        input
          font-size: $text-size-mobile

@keyframes blink
  from
    opacity: 1
  to
    opacity: 0
</style>

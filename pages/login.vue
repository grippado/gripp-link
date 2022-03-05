
<template>
  <div id="login">
    <p>gripp.link</p>
    <form @submit.prevent="login">
      <input v-model="password" type="password" placeholder="password">
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'LoginPage',
  data: () => ({
    password: ''
  }),
  mounted () {
    if (sessionStorage.getItem('isLoggedIn')) {
      this.login()
    }
  },
  methods: {
    ...mapMutations({
      logIn: 'logIn',
      setPwd: 'setPwd'
    }),
    login () {
      this.setPwd(sessionStorage.getItem('isLoggedIn') ? '0090-' : this.password)
      this.logIn()
      if (this.$store.state.auth) {
        this.$router.push('/')
        sessionStorage.setItem('isLoggedIn', true)
      }
    }
  }
})
</script>

<style>
  #login {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #15202b;
    flex-direction: column;
  }
  #login p {
    color: #fff;
    font-size: 2em;
    margin-bottom: 18px;
  }
  #login input {
    padding: 10px 20px;
    text-align: center;
  }
</style>

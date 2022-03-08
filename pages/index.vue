<template>
  <div id="login">
    <p>gripp.link STAGE</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage'
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
    font-size: 4rem;
    margin-bottom: 18px;
  }
</style>

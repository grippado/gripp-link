<template>
  <div id="error">
    <h1 v-if="error.statusCode === 404">
      404
    </h1>
    <img src="/link-down.png" alt="gripp.link is down">
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'] // you can set a custom layout for the error page
}
</script>

<style>
  #error {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #41AE49;
    flex-direction: column;
  }
  #error img {
    width: 300px;
    color: #fff;
    font-size: 4rem;
    margin-bottom: 18px;
  }
  #error h1 {
    color: #fff;
    font-size: 3rem;
    margin-bottom: 18px;
  }
  #error a {
    transition: all .2s ease-in-out;
    border: 1px solid #FFF;
    padding: 10px 20px 12px;
    font-size: 1.5rem;
    margin-bottom: 18px;
    background-color:#41AE49;
    color: #fff;
  }
  #error a:hover {
    transition: all .2s ease-in-out;
    background-color: #FFF;
    color: #41AE49;
  }
</style>

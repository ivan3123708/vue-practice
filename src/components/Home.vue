<template>
  <div id="home">
    <h1>Welcome!</h1>
    <router-link :to="{name: 'users'}" id="link">Go to users list</router-link>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style>
  #home {
    overflow: hidden;
  }

  #home > h1 {
    margin-top: 200px;
  }

  #link {
    color: #fff;
    text-decoration: none;
  }
</style>

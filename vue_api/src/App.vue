<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="link-box">
      <router-link to="/">home</router-link>
      <router-link to="/slotDemo">slotDemo</router-link>
      <router-link to="/menuView">el-menu</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link-box a {
  margin: 0 5px;
}
</style>

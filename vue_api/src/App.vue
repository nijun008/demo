<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="link-box">
      <router-link v-for="link in routers" :key="link.path" :to="link.path">{{ link.name }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      routers: []
    }
  },
  created() {
    this.routers = this.$router.options.routes
  }
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

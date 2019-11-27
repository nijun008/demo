<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="link-box">
      <router-link v-for="link in routers" :key="link.path" :to="link.path">{{ link.name }}</router-link>
    </div>
    <div class="tag-box">
      <el-tag
        class="alive-tag"
        v-for="(tag, index) in aliveLists" 
        :key="tag.path" closable
        :effect="tag.fullPath === $route.fullPath?'dark': 'plain'"
        @click="aliveClick(tag)" 
        @close="aliveClose(tag, index)">
        {{ tag.name }}
      </el-tag>
    </div>
    <keep-alive :exclude="'vModel'">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      routers: [],
      aliveLists: []
    }
  },
  created() {
    this.routers = this.$router.options.routes
    if (this.$route.name && this.$route.meta.keepAlive) {
      this.aliveLists.push(this.$route)
    }
  },
  watch: {
    $route(newRoute) {
      if (!this.aliveLists.find(item => item.fullPath === newRoute.fullPath) && newRoute.meta.keepAlive) {
        this.aliveLists.push(newRoute)
      }
    }
  },
  methods: {
    aliveClick(tag) {
      if (tag.fullPath !== this.$route.fullPath) {
        this.$router.push({path: tag.fullPath})
      }
    },
    aliveClose(tag, index) {
      if (this.aliveLists.length < 2) return

      this.aliveLists.splice(index, 1)
      if (tag.fullPath === this.$route.fullPath) {
        if (this.aliveLists[index]) {
          this.$router.push({path: this.aliveLists[index].fullPath})
        } else {
          this.$router.push({path: this.aliveLists[index - 1].fullPath})
        }
      }
    }
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
.alive-tag {
  cursor: pointer;
  margin: 0 4px;
}
</style>

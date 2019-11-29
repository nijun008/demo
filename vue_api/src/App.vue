<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="link-box">
      <router-link v-for="link in routers" :key="link.path" :to="link.path">{{ link.meta.title }}</router-link>
    </div>
    <div class="tag-box">
      <el-tabs v-model="currentName" type="border-card" closable @tab-remove="aliveClose" @tab-click="aliveClick">
        <el-tab-pane
          v-for="item in aliveLists"
          :key="item.name"
          :label="item.meta.title"
          :name="item.name">
          <keep-alive :include="includeLists">
            <router-view/>
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      routers: [],
      aliveLists: [],
      currentName: 'home'
    }
  },
  computed: {
    includeLists() {
      return this.aliveLists.map(item => item.name)
    }
  },
  created() {
    this.routers = this.$router.options.routes
    window.console.log(this.$route)
    if (this.$route.name && this.$route.meta.keepAlive) {
      this.aliveLists.push(this.$route)
    }
  },
  watch: {
    $route(newRoute) {
      if (!this.aliveLists.find(item => item.fullPath === newRoute.fullPath) && newRoute.meta.keepAlive) {
        this.aliveLists.push(newRoute)
      }
      this.currentName = newRoute.name
    }
  },
  methods: {
    aliveClick(tag) {
      if (tag.name !== this.$route.name) {
        this.$router.push({name: tag.name})
      }
    },
    aliveClose(name) {
      if (this.aliveLists.length < 2) return

      let index = this.aliveLists.findIndex(item => item.name === name)
      let tag = this.aliveLists[index]

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

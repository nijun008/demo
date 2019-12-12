<template>
  <div>
    <h2>home</h2>
    <p>登录状态: {{ isLogin }}</p>
    <el-button @click="loginOrOut" v-loading="loading">{{ isLogin ? '退出': '登录' }}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    isLogin() {
      window.console.log(this.$store)
      return this.$store.getters.isLogin
    }
  },
  methods: {
    loginOrOut() {
      this.loading = true
      if (this.isLogin) {
        this.$store.dispatch('logout').then(() => {
          window.console.log('已退出')
          this.loading = false
        })
      } else {
        this.$store.dispatch('login').then(res => {
          window.console.log(res, '已登录')
          this.loading = false
        })
      }
    }
  }
}
</script>
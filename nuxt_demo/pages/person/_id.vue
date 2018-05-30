<template>
  <div>
    {{ $store.state.user.username }}，欢迎
    <div>
      <el-button @click="logOut()">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  middleware: 'auth',
  validate({ params, query }) {
    return true
  },
  head () {
    return {
      title: '个人中心'
    }
  },
  data () {
    return {
      nickname: ''
    }
  },
  methods: {
    logOut () {
      this.$store.commit('user/logOut')
      this.$router.push('/login')
    }
  }
}
</script>
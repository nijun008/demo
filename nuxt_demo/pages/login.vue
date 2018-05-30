<template>
  <div>
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="loginSubmit()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'main',
  head () {
    return {
      title: '欢迎，请登录'
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginSubmit () {
      if(this.username) {
        this.$store.commit('user/logIn', {
          username: this.username,
          isAdmin: false,
        })
        this.$router.push('/person/' + 123456)
      } else {
        this.$message({
          type: 'warning',
          message: '请输入用户名'
        })
      }
    }
  }
}
</script>
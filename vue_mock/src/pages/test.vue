<template>
  <div>
    <h1>Test Page</h1>
    <my-test></my-test>
    {{ message }}
    <img :src="banner">
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'world',
      banner: ''
    }
  },
  created () {
    this.$axios('/api/news').then(res => {
      console.log(res.data)
    })

    this.$axios('/api/userInfo').then(res => {
      console.log(res.data)
    })

    this.$axios('/api/tags').then(res => {
      console.log(res.data)
    })

    this.$axios('/api/banner').then(res => {
      this.banner = res.data
    })
  }
}
</script>
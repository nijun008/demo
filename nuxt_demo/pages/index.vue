<template>
  <div>
    首页 {{ message }}
    <ul>
      <li v-for="(tag, index) in tags" :key="index">{{ tag.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'main',
  //middleware: 'auth',
  head () {
    return {
      title: '首页'
    }
  },
  asyncData ({ params }) {
    // axios.get('http://118.24.84.147/api/tags').then(res => {
    //   return { tags: res.data.tags }
    // })
    return axios.get('http://118.24.84.147/api/tags')
    .then((res) => {
      return { tags: [
        { title: 'HTML' },
        { title: 'CSS' }
      ] }
    }).catch(err => {
      {
      return { tags: [
        { title: 'HTML' },
        { title: 'CSS' }
      ] }
    }
    })
  },
  data () {
    return {
      message: 'Hello nuxt',
      tags: []
    }
  }
}
</script>

<style>

</style>
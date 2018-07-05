<template>
  <div class="hello">
    <h1>News</h1>
    <ul>
      <li v-for="(item,i) in news.articles" class="new" :key="i">
        <img :src="item.thumbnail_pic_s">
        <h4>{{ item.title }}</h4>
        <p>{{ item.author_name }}</p>
        <p>{{ item.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      news: []
    }
  },
  created () {
    this.$axios.get('/news').then(res => {
      this.news = res.data
      console.log(this.news)
    })
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.new {
  position: relative;
  width: 800px;
  margin: 10px auto;
  list-style: none;
  text-align: left;
  padding: 5px 3%;
}
.new img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>

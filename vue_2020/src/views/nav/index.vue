<template>
<div class="nav-page-container">
  <div>
    <div class="flex justify-center search-row">
      <div class="flex search-box">
        <input class="search-input" name="keyWord" v-model="keyWord" @keyup.enter="searchHandle">
        <div class="search-btn" @click="searchHandle">搜索</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    let keyWord = ref('')

    const searchHandle = () => {
      let wd = keyWord.value.split(' ').join('')
      if (!wd) return alert('请输入搜索内容')
      let url = `https://www.baidu.com/s?wd=${keyWord.value}`
      window.open(url, "_blank")
    }

    onMounted(() => {
      let urls = [
        'http://www.baidu.com/s?4124',
        'https://www.baidu.com/s?4124',
        'http://www.baidu.com?4124',
        'https://www.jb51.net/article/82519.htm',
        'https://colorhunt.co/palette/22272',
        'https://www.antdv.com/docs/vue/introduce-cn/',
        'https://segmentfault.com/a/1190000005136764'
      ]

      urls.forEach(url => {
        let step = url.split('?')[0]
        let step2 = step.split('//')[1]
        let step3 = step2.split('/')[0]
        console.log(step3)
      })
      
    })

    return {
      keyWord,
      searchHandle
    }
  },
  data () {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.nav-page-container {
  height: 100%;
}
.search-row {
  padding-top: 100px;
}
.search-box {
  font-size: 16px;
  border: 1px solid #3f72af;
  height: 2.2rem;
  line-height: 2.2rem;
}
.search-input {
  padding-left: 10px;
  height: 100%;
  border: none;
  outline: none;
  width: 280px;
  color: #5d5d5d;
  background-color: #f9f7f7;
}
.search-btn {
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  background-color: #3f72af;
  color: #fff;
}
</style>

<template>
<div class="nav-page-container">
  <div>
    <div class="flex justify-center search-row">
      <div class="flex search-box">
        <input class="search-input" name="keyWord" v-model="keyWord" @keyup.enter="searchHandle">
        <div class="search-btn" @click="searchHandle">搜索</div>
      </div>
    </div>

    <div class="navigation-box flex">
      <div v-for="item in navList" :key="item.url">{{ item.title }}</div>
      <div class="nav-add-btn" @click="addBtnClick">+</div>
    </div>
  </div>

  <a-modal 
    v-model:visible="addNavVisible" 
    title="新增导航"
    :maskClosable="false"
    @ok="navModalThen">
    <a-form :model="navForm" ref="navFormRef" :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }">
      <a-form-item name="title" label="名称">
        <a-input placeholder="如：学习网站"></a-input>
      </a-form-item>
      <a-form-item name="url" label="url">
        <a-input placeholder="如：https://www.pornhub.com"></a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'
export default {
  setup() {

    // 搜索
    let keyWord = ref('')

    const searchHandle = () => {
      let wd = keyWord.value.split(' ').join('')
      if (!wd) return alert('请输入搜索内容')
      let url = `https://www.baidu.com/s?wd=${keyWord.value}`
      window.open(url, "_blank")
    }

    onMounted(() => {
      console.log(setLocalStorage())
      console.log(getLocalStorage())
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

    // 导航
    let addNavVisible = ref(false)
    let navForm = reactive({ title: '', url: '' })
    let navList = reactive([])

    const addBtnClick = () => {
      addNavVisible.value = true
    }

    const navModalThen = () => {
      navList.push({
        title: navForm.title,
        url: navForm.url
      })

      console.log(navList)
      navForm = {}
      addNavVisible.value = false
    }

    return {
      keyWord,
      searchHandle,

      addNavVisible,
      navForm,
      navList,
      addBtnClick,
      navModalThen
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

.navigation-box {
  margin-top: 30px;
}
.nav-add-btn {
  cursor: pointer;
}
</style>

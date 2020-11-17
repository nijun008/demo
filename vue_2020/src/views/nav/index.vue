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
      <div class="nav-item" v-for="item in navList" :key="item.url" @click="toNav(item)">{{ item.title }}</div>
      <div class="nav-add-btn" @click="addBtnClick">+</div>
    </div>
  </div>

  <a-modal 
    v-model:visible="addNavVisible" 
    title="新增导航"
    :maskClosable="false"
    @ok="navModalThen">
    <a-form 
      :model="navForm" 
      ref="navFormRef"
      :colon="true"
      :label-col="{ span: 2, offset: 1 }"
      :wrapper-col="{ span: 19, offset: 1 }"
      :rules="rules">
      <a-form-item name="title" label="名称">
        <a-input v-model:value="navForm.title" placeholder="如：学习网站"></a-input>
      </a-form-item>
      <a-form-item name="url" label="地址">
        <a-input v-model:value="navForm.url" placeholder="如：https://www.pornhub.com"></a-input>
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
    let navList = reactive(getLocalStorage('navList') || [])

    const addBtnClick = () => {
      addNavVisible.value = true
    }

    const toNav = (item) => {
      if (item && item.url) {
        let url = item.url
        if (url.indexOf('http://') === -1 && url.indexOf('https://') === -1) {
          url = 'http://' + url
        }

        window.open(url, '_blank')
      }
    }

    const navModalThen = () => {
      navList.push({
        title: navForm.title,
        url: navForm.url
      })

      setLocalStorage('navList', navList)

      navForm.title = ''
      navForm.url = ''
      addNavVisible.value = false
    }

    return {
      keyWord,
      searchHandle,

      addNavVisible,
      navForm,
      navList,
      toNav,
      addBtnClick,
      navModalThen
    }
  },
  data () {
    const checkUrl = async (rule, value) => {
      if (!(value.split(' ').join(''))) {
        return Promise.reject('请输入url')
      } else {
        return Promise.resolve()
      }
    }
    return {
      rules: {
        title: [{ required: true, trigger: 'blur', message: '请输入导航标题' }],
        url: [
          { required: true, trigger: 'blur', message: '请输入导航url'  },
          { validator: checkUrl, trigger: 'blur' }
        ]
      }
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
  line-height: 2rem;
}
.nav-item {
  cursor: pointer;
  margin-right: 16px;
  background-color: #efefef;
  width: 140px;
  padding-left: 16px;
  padding-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nav-add-btn {
  cursor: pointer;
  background-color: #efefef;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 600;
}
</style>

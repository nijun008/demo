<template>
  <div>
    <div class="menu-wrap">
      <el-menu
        background-color="#35495e"
        text-color="#fff">
        <menu-item v-for="item in menu" :menu-data="item" :key="item.url"></menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import menuItem from '../../components/menu'
export default {
  name: 'menuView',
  components: { menuItem },
  data() {
    return {
      menu: [
        {
          title: '首页',
          url: '/home',
          icon: 'el-icon-setting',
          children: [
            {
              title: '首页-1',
              url: '/home1',
              icon: 'el-icon-s-data',
            },
            {
              title: '首页-2',
              url: '/home2',
              icon: 'el-icon-paperclip',
              children: [
                {
                  title: '首页-2-1',
                  url: '/home2-1',
                  icon: 'el-icon-link',
                },
                {
                  title: '首页-2-1',
                  url: '/home2-2',
                  icon: 'el-icon-chat-round',
                }
              ]
            },{
              title: '首页-3',
              url: '/home3',
              icon: 'el-icon-coin',
            }
          ]
        },
        {
          title: 'slot',
          url: '/slotDemo',
          icon: 'el-icon-message'
        }
      ]
    }
  }
}
</script>

<style scoped>
.menu-wrap {
  width: 300px;
}
</style>
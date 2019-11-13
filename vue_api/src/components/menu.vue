<template>
  <div>
    <template v-if="hasChildren">
      <el-submenu :index="menuData.url">
        <template slot="title">
          <i v-if="Boolean(menuData.icon)" :class="menuData.icon"></i>
          <span>{{ menuData.title }}</span>
        </template>
        <el-menu>
          <menu-item v-for="item in menuData.children" :menu-data="item" :key="item.url"></menu-item>
        </el-menu>
      </el-submenu>
    </template>
    <template v-else>
      <el-menu-item :index="menuData.url">
        <i v-if="Boolean(menuData.icon)" :class="menuData.icon"></i>
        <span>{{ menuData.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: ['menuData'],
  computed: {
    hasChildren () {
      return this.menuData.children && this.menuData.children.length
    }
  },
}
</script>
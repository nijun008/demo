<template>
<div class="footer">
  <ul class="flex nav-box align-middle view-container">
    <li v-for="nav in navList" :key="nav.path">
      <router-link :to="nav.path">{{ nav.meta.title }}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      navList: []
    }
  },
  setup(props, ctx) {
    console.log(ctx)
  },
  created() {
    this.navList = this.$router.getRoutes().filter(nav => nav.meta.show)
  },
}
</script>

<style scoped>
.footer {
  height: 100%;
  background-color: #373833;
  line-height: 2rem;
  font-size: 12px;
}

.nav-box {
  height: 100%;
}

.nav-box a {
  color: #b6b6b6;
  text-decoration: none;
  margin-right: 16px;
}
</style>

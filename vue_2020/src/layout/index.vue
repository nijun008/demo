<template>
<div class="app-container">
  <div class="main-container">
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
  <div class="footer-container">
    <nav-footer></nav-footer>
  </div>
</div>
</template>

<script>
import NavFooter from './components/NavFooter'
export default {
  components: {
    NavFooter
  }
}
</script>

<style scoped>
.app-container {
  height: 100%;
}

.main-container {
  height: calc(100% - 100px);
}

.footer-container {
  height: 100px;
}
</style>

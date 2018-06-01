// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import myTest from './components/myTest'

Vue.prototype.$axios = axios

Vue.component('myTest', myTest)

Vue.config.productionTip = false

require('./mock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

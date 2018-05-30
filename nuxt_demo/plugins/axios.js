import Vue from 'vue'
import axios from 'axios'

let options = {
  baseUrl: 'http://118.24.84.147/'
}

let $axios = axios.create(options)

Vue.use($axios)
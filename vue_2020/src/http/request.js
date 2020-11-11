import axios from 'axios'

const request = axios.create({
  baseURL: 'https://v1.hitokoto.cn',
  timeout: 10000,
})

request.interceptors.request.use((config) => {
  
  console.log('request interceptors')

  return config
}, error => {
  Promise.reject(error)
})


export const get = (url, params = {}) => request.get(url, params)
export const post = (url, params = {}) => request.post(url, params)
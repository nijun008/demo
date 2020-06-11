import axios from 'axios'

const request = axios.create({
  // baseUrl: 'http://localhost:3000',
  timeout: 10000
})

request.interceptors.request.use(config => {
  return config
}, (err) => {
  return Promise.reject(err)
})

request.interceptors.response.use(response => {
  return response
}, (err) => {
  return Promise.reject(err)
})

export function get(url, params) {
  return request.get(url, {
    params: params
  })
}

export function post(url, params) {
  return request.post(url, params)
}
import { get, post } from './request'

// 获取用户列表
export function getUsers (params) {
  return get('/api/admin/user', params)
}

// 新增用户
export function addUser (params) {
  return get('/api/admin/user/adduser', params)
}

// 删除用户
export function deleteUser (params) {
  return post('/api/admin/user/deleteuser', params)
}

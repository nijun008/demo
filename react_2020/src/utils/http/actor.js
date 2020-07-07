import { get, post } from './request'

// 获取演员列表
export function getActor (params) {
  return get('/api/admin/actor', params)
}

// 新增演员
export function addActor (params) {
  return post('/api/admin/actor/addactor', params)
}

// 编辑演员
export function updateActor (params) {
  return get('/api/admin/actor/updateactor', params)
}


// 删除演员
export function deleteActor (params) {
  return post('/api/admin/actor/deleteactor', params)
}

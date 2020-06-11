import { get, post } from './request'

// 获取影片列表
export function getMovie (params) {
  return get('/api/admin/movie', params)
}

// 新增影片
export function addMovie (params) {
  return post('/api/admin/movie/addmovie', params)
}

// 编辑影片
export function updateMovie (params) {
  return get('/api/admin/movie/updatemovie', params)
}


// 删除影片
export function deleteMovie (params) {
  return post('/api/admin/movie/deletemovie', params)
}

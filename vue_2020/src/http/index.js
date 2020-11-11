import { get } from './request'

export const getWitticism = (params) => {
  return get('/', params)
}
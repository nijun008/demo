export default {
  namespaced: true,
  state: {
    lists: []
  },
  mutations: {
    ADD(state, data) {
      Array.isArray(data)
      ?
      state.lists = [...state.lists, ...data]
      :
      state.lists.push(data)
    },
    REMOVE(state, data) {
      Array.isArray(data) 
      ? 
      state.lists = state.lists.filter(item => !data.find(ite => item.id === ite.id)) 
      :
      state.lists = state.lists.filter(item => item.id !== data.id)
    }
  },
  getters: {
    count: state => state.lists.length,
    saleCount: state => state.lists.filter(item => item.orgPrice > item.sellPrice).length
  }
}
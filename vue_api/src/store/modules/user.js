export default {
  state: {
    token: '',
    userInfo: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login({ commit }) {
      return new Promise((resolve) => {
        let resData = {
          token: '2kjlk2l1k2j5',
          userInfo: {
            accountName: 'zhangsan',
            userName: '张三',
            age: 28
          }
        }
        setTimeout(function () {
          commit('SET_TOKEN', resData.token)
          commit('SET_USERINFO', resData.userInfo)
          resolve(resData)
        }, 1000)
      })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        setTimeout(function () {
          commit('SET_TOKEN', '')
          commit('SET_USERINFO', {})
          resolve()
        }, 1000)
      })
    }
  },
  getters: {
    isLogin: state => {
      return Boolean(state.token || state.token === 0)
    }
  }
}
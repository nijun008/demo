export const state = () => ({
  username: '',
  isAdmin: false,
  loginState: false
})

export const mutations = {
  logIn (state, userInfo) {
    state.username = userInfo.username
    state.isAdmin = userInfo.isAdmin
    state.loginState = true
  },

  logOut (state) {
    state.username = ''
    state.isAdmin = false
    state.loginState = false
  }
}
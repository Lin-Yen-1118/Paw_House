// menu
const ui = {
  namespaced: true,
  state: {
    menuVisible: false
  },
  getters: {
    menuVisible(state) {
      return state.menuVisible
    }
  },
  mutations: {
    toggleMenu(state, params) {
      state.menuVisible = params
    }
  }
}

export default ui

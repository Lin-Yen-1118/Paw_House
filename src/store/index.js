import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: []
  },
  getters: {
    getProductList(state) {
      return state.productList
    },
    getProductLength(state) {
      return state.productList.length
    }
  },
  mutations: {
    increment(state, params) {
      state.productList.push(params)
    },
    delCartList(state, id) {
      state.productList.forEach((products, index) => {
        if (products.Id === id) {
          state.productList.splice(index, 1)
        }
      })
    }
  },
  actions: {}
})

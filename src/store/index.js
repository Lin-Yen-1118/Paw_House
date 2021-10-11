import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: []
  },
  getters: {
    getProductList: state => {
      return state.productList
    },
    getProductLength: state => {
      return state.productList.length
    }
  },
  mutations: {
    increment(state, params) {
      state.productList.push(params)
    }
  },
  actions: {

  }
});
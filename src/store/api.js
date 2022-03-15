import axios from 'axios'

const api = {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    products(state) {
      return state.products
    }
  },
  actions: {
    async getproductsList({ commit }, productsName) {
      axios.get(`${process.env.VUE_APP_BASE_URL}/${productsName}`).then(res => {
        const {
          data: { products }
        } = res
        commit('getproductsList', products)
      })
    }
  },
  mutations: {
    getproductsList(state, products) {
      state.products = products
    }
  }
}
export default api

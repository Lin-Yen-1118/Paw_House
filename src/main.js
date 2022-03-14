import Vue from 'vue'
import App from './App.vue'
// import router from './router/index.js'
import router from './router'
import store from './store'

require('./mock/data/mock')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')

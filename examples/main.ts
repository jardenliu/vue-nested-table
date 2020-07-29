import Vue from 'vue'
import Examples from './components/examples'
import'./main.styl'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(Examples),
  router,
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//main
new Vue({
  render: h => h(App),
}).$mount('#app')

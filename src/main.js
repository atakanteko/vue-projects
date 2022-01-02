import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import EvaIcons from 'vue-eva-icons'

Vue.use(EvaIcons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

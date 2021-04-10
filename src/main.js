import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animate from 'animate.css'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false


Vue.use(animate)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

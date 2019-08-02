import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(store)
import VueLazyload from 'vue-lazyload'
import './assets/css/base.scss'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

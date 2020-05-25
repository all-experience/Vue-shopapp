import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(store)
import VueLazyload from 'vue-lazyload'
import './assets/css/base.scss'

// loading组件
import jnLoading from '@/utils/loading/jn-loading'
Vue.use(jnLoading)
import Loading from './utils/loading'
Vue.use(Loading)
import toast from '@/utils/toast'
Vue.use(toast)
import modal from '@/utils/modal'
Vue.use(modal)

// even-bus
Vue.prototype.$eventBus = new Vue({
  name: 'bus'
})

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

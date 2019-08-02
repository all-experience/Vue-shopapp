import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const VueLazy = () => import(/* webpackChunkName: "vue-lazy" */ '@/components/test/vue-lazy.vue')
const EnvTest = () => import(/* webpackChunkName: "env-test" */ '@/components/env/process.vue')
const CssTest = () => import(/* webpackChunkName: "rem-test" */ '@/components/css/css.vue')
const VueStore = () => import(/* webpackChunkName: "vue-store" */ '@/components/vue-store/index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/vue-lazy',
      name: 'vue-lazy',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: VueLazy
    },
    {
      path: '/vue-env',
      name: 'env-test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EnvTest
    },
    {
      path: '/vue-css',
      name: 'css-test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CssTest
    },
    {
      path: '/vue-store',
      name: 'vue-store',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: VueStore
    }
  ]
})

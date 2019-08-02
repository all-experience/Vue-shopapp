import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import vueStore from './modules/vue-store'

Vue.use(Vuex)

const state = {
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  modules: {
    vueStore
  }
})

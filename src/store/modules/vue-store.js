import * as types from '../mutation-types'

const state = {
  vueStore: 'I’m vueStore from vuex'
}

// getters
const getters = {
  getVueStore: state => state.vueStore
}

// actions
const actions = {
  setVueStore ({ commit }, data) {
    commit(types.SET_VUE_STORE, {data})
  }
}

// mutations
const mutations = {
  [types.SET_VUE_STORE] (state, {data}) {
    state.vueStore = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

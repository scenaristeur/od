import Vue from 'vue'
import Vuex from 'vuex'
import solid from './modules/solid'
import od from './modules/od'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    solid, od
  }
})

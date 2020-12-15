import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import pool from './modules/pool'
import view from './modules/view'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    common,
    pool,
    view
  }
})

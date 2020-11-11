import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connectedUser: null,
    authToken: null
  },
  mutations: {
    SET_CONNECTED_USER (state, user) {
      state.connectedUser = user
    },
    SET_AUTH_TOKEN (state, token) {
      state.authToken = token
    }
  },
  actions: {
    setConnectedUser ({ commit }, connectedUserId) {
      commit('SET_CONNECTED_USER', connectedUserId)
    },
    setAuthToken ({ commit }, connectedUserId) {
      commit('SET_AUTH_TOKEN', connectedUserId)
    }
  },
  getters: {
    GET_CONNECTED_USER: (state) => state.connectedUser,
    GET_AUTH_TOKEN: (state) => state.authToken
  },
  plugins: [createPersistedState()]
})

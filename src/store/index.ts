import { createStore } from 'vuex'

export default createStore({
  state: {
    flavor: '',
  },
  mutations: {
    change(state, flavor) {
      state.flavor = flavor
    },
  },
  actions: {},
  modules: {},
  getters: {
    flavor: state => state.flavor,
  },
})

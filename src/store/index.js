import { createStore } from "vuex";

export default createStore({
  state: {
    navigationBarActive: false
  },
  getters: {
    estado(state) {
      console.log(state.navigationBarActive);
      return state.navigationBarActive;
    }
  },
  mutations: {
    fNavigationBar(state) {
      !state.navigationBarActive;
    }
  },
  actions: {},
  modules: {}
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
       activeBar: 'HomeBar'
    }
  },
  mutations: {
    setActiveBar(state, payload) {
      state.activeBar = payload;
    }
  },
  actions: {
    // Tus acciones aquí
  },
  getters: {
    // Tus getters aquí
  },

});

export default store;
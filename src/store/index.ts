import { createStore } from 'vuex'

const store = createStore({
    state: {
      counter: 0
    },
    mutations: {
      increaseCounter(state) {
        state['counter'] = state['counter'] + 1;
      },
    },
    actions: {
      increaseCounter({ commit }) {
        commit("increaseCounter");
      },
    },
    modules: {
    }
})

export default store

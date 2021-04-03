import { createStore } from 'vuex';
import { CounterActions } from '../types/enums';

const store = createStore({
    state: {
      counter: 0
    },
    mutations: {
      [CounterActions.INCREASE] (state) {
        state['counter'] = state['counter'] + 1;
      },
    },
    actions: {
      increaseCounter({ commit }) {
        commit(CounterActions.INCREASE);
      },
    },
    modules: {
    }
})

export default store

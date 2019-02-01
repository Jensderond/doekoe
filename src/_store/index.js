import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './account.module';
import { alert } from './alert.module';
import { doekoes } from './doekoes.module';
// import { users } from './users.module';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  modules: {
    account,
    alert,
    doekoes,
    // users
  },
  mutations: {
    loadFromCache(state, cached) {
      if (cached) {
        Object.keys(cached).forEach((key) => {
          state[key] = Object.assign({}, state[key], cached[key]);
        });
      }

      state.initialized = true;
    },
  },
  plugins: [cache, sync],
});

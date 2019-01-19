import Vue from 'vue';
import Vuex from 'vuex';

import { doekoes } from './doekoes.module';
import { account } from './account.module';
// import { users } from './users.module';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  modules: {
    doekoes,
    account,
    // users
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quarter: moment().quarter(),
  },
  mutations: {
    changeQuarter(state, n) {
      state.quarter = n;
    },
  },
});

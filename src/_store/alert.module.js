import Vue from 'vue';

/* eslint-disable no-shadow */
const state = {
  type: null,
  message: null,
};

const actions = {
  success({ commit }, message) {
    commit('success', message);
  },
  error({ commit }, message) {
    commit('error', message);
  },
  clear({ commit }, message) {
    commit('success', message);
  },
};

const mutations = {
  success(state, message) {
    state.type = 'alert-success';
    state.message = message;
    Vue.notify({
      group: 'auth',
      type: 'success',
      title: 'Welcome',
      text: message,
    });
  },
  error(state, message) {
    state.type = 'alert-danger';
    state.message = message;
    Vue.notify({
      group: 'auth',
      type: 'error',
      title: 'Oops',
      text: message,
    });
  },
  clear(state) {
    state.type = null;
    state.message = null;
  },
};

// eslint-disable-next-line import/prefer-default-export
export const alert = {
  namespaced: true,
  state,
  actions,
  mutations,
};

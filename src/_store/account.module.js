/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { userService } from '../_services';
import { router } from '../_helpers';

const user = JSON.parse(localStorage.getItem('user'));
const state = user
  ? { status: { loggedIn: false }, user }
  : { status: { loggedIn: false }, user: null };

const actions = {
  login({ dispatch, commit }, { email, password }) {
    commit('loginRequest', { email });

    userService.login(email, password)
      .then(
        (user) => {
          commit('loginSuccess', user);
          dispatch('doekoes/getAll', null, { root: true });
          router.push('/');
        },
        (error) => {
          if (error.response === undefined) {
            const errorMessage = 'No connection to internet';
            commit('loginFailure', errorMessage);
            dispatch('alert/error', errorMessage, { root: true });
          } else {
            commit('loginFailure', error.response.data.message);
            dispatch('alert/error', error.response.data.message, { root: true });
          }
        },
      );
  },
  logout({ commit }) {
    userService.logout();
    commit('logout');
  },
  register({ dispatch, commit }, user) {
    commit('registerRequest', user);

    userService.register(user)
      .then(
        (response) => {
          commit('registerSuccess', response);
          router.push('/login');
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true });
          });
        },
        (error) => {
          commit('registerFailure', error);
          dispatch('alert/error', error, { root: true });
        },
      );
  },
};

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggingIn: false };
    state.user = user;
  },
  loginFailure(state) {
    state.status = { loggingIn: false };
    state.user = null;
  },
  logout(state) {
    state.status = { loggingIn: false };
    state.user = null;
  },
  registerRequest(state) {
    state.status = { loggingIn: false, registering: true };
  },
  registerSuccess(state) {
    state.status = { loggingIn: false, registering: false };
  },
  registerFailure(state) {
    state.status = { loggingIn: false, registering: false };
  },
};

// eslint-disable-next-line import/prefer-default-export
export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};

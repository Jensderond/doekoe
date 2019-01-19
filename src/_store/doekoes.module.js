/* eslint-disable no-shadow */
import moment from 'moment';
import { doekoeService } from '../_services';

const state = {
  all: {},
  quarter: moment().quarter(),
};

const actions = {
  getAll({ commit }) {
    commit('getAllRequest');

    doekoeService.getAll()
      .then(
        doekoes => commit('getAllSuccess', doekoes),
        error => commit('getAllFailure', error),
      );
  },
  delete({ commit }, id) {
    commit('deleteRequest', id);
    doekoeService.delete(id)
      .then(
        () => commit('deleteSuccess', id),
        error => commit('deleteFailure', { id, error: error.toString() }),
      );
  },
  addOne({ commit }, item) {
    commit('addRequest', item);
    doekoeService.add(item)
      .then(
        (doekoe) => { commit('addSuccess', doekoe); },
        error => commit('addFailure', { item, error: error.toString() }),
      );
  },
  getQuarter({ commit }) {
    commit('getQuarter');
  },

  changeQuarter({ commit }, quarter) {
    commit('changeQuaterRequest', quarter);
  },
};

const mutations = {
  getAllRequest(state) {
    state.all = { loading: true };
  },
  getAllSuccess(state, doekoes) {
    state.all = { items: doekoes };
  },
  getAllFailure(state, error) {
    state.all = { error };
  },
  deleteRequest(state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map(doekoe =>
      (doekoe.id === id
        ? { ...doekoe, deleting: true }
        : doekoe),
    );
  },
  deleteSuccess(state, id) {
    // remove deleted user from state
    state.all.items = state.all.items.filter(doekoe => doekoe.id !== id);
  },
  deleteFailure(state, { id, error }) {
    // remove 'deleting:true' property and
    // add 'deleteError:[error]' property to user
    state.all.items = state.items.map((user) => {
      if (user.id === id) {
        // make copy of user without 'deleting:true' property
        const { deleting, ...userCopy } = user;
        // return copy of user with 'deleteError:[error]' property
        return { ...userCopy, deleteError: error };
      }

      return user;
    });
  },
  addRequest(state, doekoe) {
    if (state.all.items === undefined) { state.all.items = []; }
    state.all.items.push({ ...doekoe, adding: true });
  },
  addSuccess(state, doekoe) {
    if (state.all.items === undefined) { state.all.items = []; }
    state.all.items = state.all.items.map((item) => {
      if (item.id === doekoe.id) {
        // make copy of item without 'adding:true' property
        const { adding, ...doekoeCopy } = doekoe;
        // return copy of item with 'deleteError:[error]' property
        return { ...doekoeCopy };
      }

      return doekoe;
    });
  },
  addFailure(state, { item, error }) {
    // remove 'adding:true' property and
    // add 'addError:[error]' property to item
    state.all.items = state.items.map((doekoe) => {
      if (doekoe === item) {
        // make copy of item without 'deleting:true' property
        const { adding, ...doekoeCopy } = doekoe;
        // return copy of item with 'deleteError:[error]' property
        return { ...doekoeCopy, deleteError: error };
      }

      return doekoe;
    });
  },
  getQuarter(state) {
    return state.quarter;
  },
  changeQuaterRequest(state, quarter) {
    state.quarter = quarter;
  },
};

// eslint-disable-next-line import/prefer-default-export
export const doekoes = {
  namespaced: true,
  state,
  actions,
  mutations,
};

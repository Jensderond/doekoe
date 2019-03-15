/* eslint-disable no-shadow */
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { doekoeService } from '../_services';

dayjs.extend(quarterOfYear);

const localItems = JSON.parse(localStorage.getItem('doekoes'));
const state = localItems
  ? { all: { items: localItems }, quarter: dayjs().quarter(), updatedAt: null }
  : { all: {}, quarter: dayjs().quarter(), updatedAt: null };

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
    state.all = { items: state.all.items, loading: true };
  },
  getAllSuccess(state, doekoes) {
    state.updatedAt = new Date().getTime();
    state.all = { items: doekoes, loading: false };
  },
  getAllFailure(state, error) {
    state.all = { error, loading: false };
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
    // Save items to localStorage.
    const localItems = JSON.parse(localStorage.getItem('doekoes'));
    state.all.items = state.all.items.map((item) => {
      if (
        item.id === undefined &&
        item.amount === doekoe.amount &&
        item.category === doekoe.category &&
        item.type === doekoe.type &&
        item.company === doekoe.company
      ) {
        // make copy of item without 'adding:true' property
        const { adding, ...doekoeCopy } = doekoe;

        localItems.map((item) => {
          if (item.id === undefined && item.adding === true) {
            const { adding, ...doekoeCopy } = doekoe;
            return { ...doekoeCopy };
          }
          return item;
        });

        return { ...doekoeCopy };
      }

      return item;
    });
    localStorage.setItem('doekoes', JSON.stringify(localItems));
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

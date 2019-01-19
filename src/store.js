import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import axios from 'axios';

Vue.use(Vuex);
const backend = 'https://behind.doekoe.sh';

export default new Vuex.Store({
  state: {
    doekoes: [],
    quarter: moment().quarter(),
  },
  mutations: {
    changeQuarter(state, n) {
      state.quarter = n;
    },
    setStore(state, doekoes) {
      doekoes.sort((a, b) => new Date(a.date) - new Date(b.date));
      state.doekoes = doekoes;
    },
    addDoekoe(state, doekoe) {
      state.doekoes = [...state.doekoes, doekoe];
    },
    deleteDoekoe(state, id) {
      state.doekoes.splice(id, 1);
    },
  },
  actions: {
    getDoekoes({ commit }) {
      // TODO: add loading component
      // commit('loading');
      try {
        axios.get(`${backend}/doekoes`)
          .then(response => commit('setStore', response.data))
          .catch((error) => {
            // eslint-disable-next-line
            console.log(error);
            return null;
          });
      } catch (err) {
        // eslint-disable-next-line
        console.error(`Error: ${err}`);
      }
    },
    addDoekoe({ commit }, data) {
      try {
        const doekoe = { ...data };
        doekoe.quarter = moment(data.date).quarter();
        if (data !== undefined) {
          axios.post(`${backend}/doekoes`, doekoe)
            .then(response => commit('addDoekoe', response.data))
            .catch((error) => {
              // eslint-disable-next-line
              console.log(error);
              return null;
            });
        }
      } catch (err) {
        // eslint-disable-next-line
        console.error(`Error: ${err}`);
      }
    },
    deleteDoekoe({ commit }, payload) {
      try {
        axios.delete(`${backend}/doekoes/${payload.doekoeId}`)
          .then(() => commit('deleteDoekoe', payload.index))
          .catch((error) => {
            // eslint-disable-next-line
            console.log(error);
            return null;
          });
      } catch (err) {
        // eslint-disable-next-line
        console.error(`Error: ${err}`);
      }
    },
  },
});

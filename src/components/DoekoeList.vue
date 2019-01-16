<template>
  <div id="doekoelist">
    <DoekoeFilter/>
    <div class="list">
      <ul class="uk-list uk-list-divider">
        <div v-for="(doekoe, idx) in doekoes" :key="idx"
          class="uk-margin uk-card uk-card-body
            uk-width-auto uk-animation-slide-top-medium"
          v-bind:class="{ 'uk-card-income': doekoe.type === 'Inkomen',
                          'uk-card-expense': doekoe.type === 'Uitgave' }">
          <div class="uk-width-auto">
            <h3 class="uk-card-title uk-margin-remove-bottom">€{{ doekoe.amount }}</h3>
            <p class="uk-text-meta uk-margin-remove-top">
              <time>{{ doekoe.date.seconds * 1000 | moment }}</time>
            </p>
          </div>
          <p>{{ doekoe.company }}</p>

          <div class="uk-position-center-right uk-margin-right">
            <a id="js-modal-confirm" @click.prevent="showModal(doekoe)"
              class="uk-icon-link" uk-icon="trash" ratio="2" href="#"></a>
          </div>
        </div>
      </ul>
    </div>
    <router-link
      to="/new"
      class="uk-button uk-button-secondary">Add new</router-link>
  </div>
</template>

<script>
import DoekoeFilter from '@/components/DoekoeFilter';
import moment from 'moment';
import UIkit from 'uikit';
import db from '../Database';
import store from '../store';

export default {
  name: 'DoekoeList',
  data() {
    return {
      step: 1,
      doekoes: [],
      quarter: store.state.quarter,
    };
  },
  components: {
    DoekoeFilter,
  },
  methods: {
    showModal(doekoe) {
      if (doekoe === undefined) { return; }

      UIkit.modal.confirm(`Are you sure you want to delete this?<br/><br/>${doekoe.company} - €${doekoe.amount}`, { bgClose: true }).then(() => {
        // eslint-disable-next-line
        console.log('Confirmed.')
        this.deleteDoekoe(doekoe);
      }, () => {
        // eslint-disable-next-line
        console.log('Rejected.')
      });
    },
    deleteDoekoe(doekoe) {
      if (doekoe === undefined) { return; }

      // eslint-disable-next-line
      console.log(doekoe.id);
      db.collection('doekoes').doc(doekoe.id).delete();
    },
  },
  filters: {
    moment: date => moment(date).format('L'),
  },
  firestore() {
    return {
      // TODO: Drop the firestore collection in Vuex to make it refresh when I want.
      doekoes: db.collection('doekoes').orderBy('date').where('quarter', '==', store.state.quarter),
    };
  },
};

</script>

<style scoped>
.uk-list {
  text-align: left;
}

.uk-card-income {
  background: #41b883;
  color: #fff;
}

.uk-card-expense h3,
.uk-card-income h3,
.uk-text-meta {
  color: #fff;
}

.uk-card-expense {
  background: #b84141;
  color: #fff;
}

.uk-icon-link,
.uk-icon-link:focus,
.uk-icon-link:hover {
  color: #fff;
}
</style>

<template>
  <div id="doekoelist">
    <DoekoeFilter />
    <div class="list">
      <ul class="uk-list uk-list-divider">
        <div
          v-for="(doekoe, idx) in doekoes"
          :key="idx"
          class="uk-margin uk-card uk-card-body
            uk-width-auto uk-animation-slide-top-medium"
          :class="{ 'uk-card-income': doekoe.type === 'income',
                    'uk-card-expense': doekoe.type === 'expense' }"
        >
          <div class="uk-width-auto">
            <h3 class="uk-card-title uk-margin-remove-bottom">€{{ doekoe.amount | currency }}</h3>
            <p class="uk-text-meta uk-margin-remove-top">
              <time>{{ doekoe.date | moment }}</time>
            </p>
          </div>
          <p>{{ doekoe.company }}</p>

          <div class="uk-position-center-right uk-margin-right">
            <a
              @click.prevent="showModal(idx, doekoe)"
              id="js-modal-confirm"
              class="uk-icon-link"
              uk-icon="trash"
              ratio="2"
              href="#"
            />
          </div>
        </div>
      </ul>
    </div>
    <router-link
      to="/new"
      class="uk-button uk-button-secondary"
    >Add new</router-link>
  </div>
</template>

<script>
import DoekoeFilter from '@/components/DoekoeFilter';
import moment from 'moment';
import UIkit from 'uikit';
import store from '../store';

export default {
  name: 'DoekoeList',
  data() {
    return {
      step: 1,
      // doekoes: [],
    };
  },
  components: {
    DoekoeFilter,
  },
  methods: {
    showModal(idx, doekoe) {
      if (doekoe === undefined) { return; }

      UIkit.modal.confirm(`Are you sure you want to delete this?<br/><br/>${doekoe.company} - €${doekoe.amount}`, { bgClose: true }).then(() => {
        this.deleteDoekoe(idx, doekoe.id);
      }, () => {
        // eslint-disable-next-line
        console.log('Rejected.');
      });
    },
    deleteDoekoe(index, doekoeId) {
      store.dispatch('deleteDoekoe', { index, doekoeId });
    },
  },
  filters: {
    moment: date => moment(date).format('L'),
    currency: value => (value / 1).toFixed(2).replace('.', ','),
  },
  computed: {
    doekoes() {
      return store.state.doekoes.filter(q => q.quarter === store.state.quarter);
    },
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

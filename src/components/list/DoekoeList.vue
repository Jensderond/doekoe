<template>
  <div
    id="doekoelist"
    class="uk-light"
  >
    <div
      class="controls__top uk-column-1-2"
    >
      <DoekoeFilter />
      <router-link
        to="/new"
        class="uk-button uk-button-secondary uk-width-1-1"
      >Add new</router-link>
    </div>
    <div
      class="list"
      v-if="doekoes[0] !== undefined"
    >
      <ul class="uk-list uk-list-divider">
        <div
          v-for="(doekoe, idx) in doekoes"
          :key="idx"
          class="uk-margin uk-card uk-card-body
            uk-width-auto uk-animation-slide-bottom-small"
          :class="{ 'uk-card-income': doekoe.type === 'income',
                    'uk-card-expense': doekoe.type === 'expense',
                    'loading': doekoesLoading === true }"
        >
          <div class="uk-width-auto">
            <h3 class="uk-card-title uk-margin-remove-bottom">€{{ doekoe.amount | currency }}</h3>
            <p class="uk-text-meta uk-margin-remove-top">
              <time>{{ doekoe.date | moment }}</time>
            </p>
          </div>
          <p>{{ doekoe.company }}</p>

          <div class="uk-position-center-right uk-position-medium ">
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
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import moment from 'moment';
import UIkit from 'uikit';
import DoekoeFilter from '@/components/filter/DoekoeFilter';

export default {
  name: 'DoekoeList',
  components: {
    DoekoeFilter,
  },
  methods: {
    ...mapActions('doekoes', {
      getAllDoekoes: 'getAll',
      deleteDoekoe: 'delete',
    }),
    showModal(idx, doekoe) {
      if (doekoe === undefined) { return; }

      UIkit.modal.confirm(`Are you sure you want to delete this?<br/><br/>${doekoe.company} - €${doekoe.amount}`, { bgClose: true }).then(() => {
        this.deleteDoekoe(doekoe.id);
      }, () => {
        // eslint-disable-next-line
        console.log('Rejected.');
      });
    },
  },
  filters: {
    moment: date => moment(date).format('DD-MM-YYYY'),
    currency: value => (value / 1).toFixed(2).replace('.', ','),
  },
  computed: {
    ...mapState({
      account: state => state.account,
      doekoesLoading: state => state.doekoes.all.loading,
      // doekoes: state => state.doekoes.all,
    }),
    doekoes() {
      if (this.$store.state.doekoes.updatedAt === null) { this.getAllDoekoes(); }
      if (this.$store.state.doekoes.all.items === undefined) return [];
      return [...this.$store.state.doekoes.all.items]
        .filter(
          q => q.quarter === this.$store.state.doekoes.quarter,
        )
        .sort(
          (a, b) => new Date(a.date) - new Date(b.date),
        );
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
.controls__top {
  margin-bottom: 10px;
}
[class*=uk-column-] {
  column-gap: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.loading {
  animation: pulsate 1.7s ease-out;
  animation-iteration-count: infinite;
  opacity: 0.5;
}
@keyframes pulsate {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1.0;
  }
  100% {
    opacity: 0.5;
  }
}
</style>

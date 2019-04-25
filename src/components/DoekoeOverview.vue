<template>
  <div
    id="doekoeoverview"
  >
    <div
      class="controls__top"
    >
      <DoekoeFilter />
      <router-link
        to="/new"
        class="uk-button uk-button-secondary"
      >Add new</router-link>
    </div>
    <h2>Financial Overview - Q{{ this.$store.state.doekoes.quarter }}</h2>
    <ul class="uk-list uk-list-divider">
      <div
        class="uk-margin uk-card uk-card-body
          uk-width-auto uk-animation-slide-bottom-small uk-card-income"
        :class="{ 'loading': doekoesLoading === true }"
      >
        <div class="uk-width-auto">
          <h3 class="uk-card-title uk-margin-remove-bottom">€{{ profit | currency }}</h3>
          <p class="uk-text-meta uk-margin-remove-top">
            <time>Total income</time>
          </p>
        </div>
      </div>
      <div
        class="uk-margin uk-card uk-card-body
          uk-width-auto uk-animation-slide-bottom-small uk-card-expense"
        :class="{ 'loading': doekoesLoading === true }"
      >
        <div class="uk-width-auto">
          <h3 class="uk-card-title uk-margin-remove-bottom">€{{ expense | currency }}</h3>
          <p class="uk-text-meta uk-margin-remove-top">
            <time>Total expense</time>
          </p>
        </div>
      </div>
    </ul>
    <p :class="{ 'loading': doekoesLoading === true }">
      Total revenue is: €{{ profit - expense | currency }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

const DoekoeFilter = () => import('@/components/DoekoeFilter');

export default {
  name: 'DoekoeOverview',
  components: {
    DoekoeFilter,
  },
  methods: {
    ...mapActions('doekoes', {
      getAllDoekoes: 'getAll',
      deleteDoekoe: 'delete',
    }),
  },
  filters: {
    currency: value => (value / 1).toFixed(2).replace('.', ','),
  },
  computed: {
    ...mapState({
      doekoesLoading: state => state.doekoes.all.loading,
      // doekoes: state => state.doekoes.all,
    }),
    doekoes() {
      if (this.$store.state.doekoes.updatedAt === null) { this.getAllDoekoes(); }
      if (this.$store.state.doekoes.all.items === undefined) return [];
      return [...this.$store.state.doekoes.all.items]
        .filter(
          q => q.quarter === this.$store.state.doekoes.quarter,
        );
    },
    profit() {
      if (this.doekoes === undefined) return 0;
      const income = this.doekoes.filter(
        i => i.type === 'income',
      );
      const initialValue = 0;
      const sum = income.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        initialValue,
      );

      return sum;
    },
    expense() {
      if (this.doekoes === undefined) return 0;
      const income = this.doekoes.filter(
        i => i.type === 'expense',
      );
      const initialValue = 0;
      const sum = income.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        initialValue,
      );

      return sum;
    },
  },
};
</script>

<style scoped>
.uk-card {
  width: 100%;
}
</style>

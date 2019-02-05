<template>
  <div
    id="doekoeoverview"
    class="uk-light"
  >
    <div
      class="controls__top"
    >
      <DoekoeFilter />
    </div>
    <h2>Overview Of Financial Quarter {{ this.$store.state.doekoes.quarter }}</h2>
    <ul class="uk-list uk-list-divider">
      <div
        class="uk-margin uk-card uk-card-body
          uk-width-auto uk-animation-slide-bottom-small uk-card-income"
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
      >
        <div class="uk-width-auto">
          <h3 class="uk-card-title uk-margin-remove-bottom">€{{ expense | currency }}</h3>
          <p class="uk-text-meta uk-margin-remove-top">
            <time>Total expense</time>
          </p>
        </div>
      </div>
    </ul>
    <p>Total revenue is: €{{ profit - expense | currency }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DoekoeFilter from '@/components/filter/DoekoeFilter';

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
</style>

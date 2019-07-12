<template>
  <div id="doekoeoverview">
    <div class="list">
      <h2 class="mb-4">Overview - Q{{ this.$store.state.doekoes.quarter }}</h2>
      <v-card width="100%" dark ripple class="secondary mb-3">
        <v-layout text-xs-center wrap>
          <v-flex xs12>
            <v-card-title primary-title>
              <v-flex>
                <div class="headline">€{{ profit | currency }}</div>
                <span>Total income</span>
              </v-flex>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card width="100%" dark ripple class="primary mb-2">
        <v-layout text-xs-center wrap>
          <v-flex xs12>
            <v-card-title primary-title>
              <v-flex>
                <div class="headline">€{{ expense | currency }}</div>
                <span>Total expense</span>
              </v-flex>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
      <p
        :class="{ 'loading': doekoesLoading === true }"
      >Total revenue is: €{{ profit - expense | currency }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "DoekoeOverview",
  methods: {
    ...mapActions("doekoes", {
      getAllDoekoes: "getAll",
      deleteDoekoe: "delete"
    })
  },
  filters: {
    currency: value => (value / 1).toFixed(2).replace(".", ",")
  },
  computed: {
    ...mapState({
      doekoesLoading: state => state.doekoes.all.loading
      // doekoes: state => state.doekoes.all,
    }),
    doekoes() {
      if (this.$store.state.doekoes.updatedAt === null) {
        this.getAllDoekoes();
      }
      if (this.$store.state.doekoes.all.items === undefined) return [];
      return [...this.$store.state.doekoes.all.items].filter(
        q => q.quarter === this.$store.state.doekoes.quarter
      );
    },
    profit() {
      if (this.doekoes === undefined) return 0;
      const income = this.doekoes.filter(i => i.type === "income");
      const initialValue = 0;
      const sum = income.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        initialValue
      );

      return sum;
    },
    expense() {
      if (this.doekoes === undefined) return 0;
      const income = this.doekoes.filter(i => i.type === "expense");
      const initialValue = 0;
      const sum = income.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        initialValue
      );

      return sum;
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

<template>
  <div
    id="doekoes"
  >
    <div
      class="list mb-4"
      v-if="doekoes[0] !== undefined"
    >
      <h2 class="mb-4 w-100">Details - Q{{ this.$store.state.doekoes.quarter }}</h2>
      <DoekoeItem
        v-for="(doekoe, idx) in doekoes"
        :key="idx"
        :doekoeData="doekoe"
      />
    </div>
    <div
      class="no__results mb-4"
      v-if="doekoes[0] === undefined"
    >
      <h2>Nothing to see here yet</h2>
      <p style="font-size: 3em;">🤷‍♀️🤷‍♂️</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

const DoekoeItem = () => import('@/components/DoekoeItem');

export default {
  name: 'DoekoeList',
  components: {
    DoekoeItem,
  },
  methods: {
    ...mapActions('doekoes', {
      getAllDoekoes: 'getAll',
      deleteDoekoe: 'delete',
    }),
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
          (a, b) => new Date(b.date) - new Date(a.date),
        );
    },
  },
};

</script>

<style scoped lang="scss">
.no__results {
  padding-top: 5em;
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

<template>
  <v-flex
    id="doekoefilter"
    class="mr-2"
    xs6
    md3
  >
    <v-select
      :items="optionValues"
      label="Quarter"
      v-model="filterSelected"
      :change="changeOption(filterSelected)"
    ></v-select>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DoekoeFilter',
  data() {
    return {
      optionValues: [
        { value: 1, text: 'Q1' },
        { value: 2, text: 'Q2' },
        { value: 3, text: 'Q3' },
        { value: 4, text: 'Q4' },
      ],
      filterSelected: this.$store.state.doekoes.quarter,
    };
  },
  methods: {
    ...mapActions('doekoes', {
      getQuarter: 'getQuarter',
      changeOption: 'changeQuarter',
    }),
  },
  computed: {
    // ...mapState({
    //   filterSelected: state => state.doekoes.quarter,
    // }),
  },
};
</script>

<style scoped>

</style>

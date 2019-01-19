<template>
  <div
    id="doekoefilter"
    class="uk-margin uk-width-1-1"
  >
    <select
      class="uk-select"
      v-model="filterSelected"
      :change="changeOption(filterSelected)"
    >
      <option
        v-for="optionValue in optionValues"
        :key="optionValue.id"
        :value="optionValue.id"
      >
        {{ optionValue.value }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DoekoeFilter',
  data() {
    return {
      optionValues: [
        { id: 1, value: 'Quarter 1' },
        { id: 2, value: 'Quarter 2' },
        { id: 3, value: 'Quarter 3' },
        { id: 4, value: 'Quarter 4' },
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

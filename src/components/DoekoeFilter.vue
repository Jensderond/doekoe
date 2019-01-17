<template>
  <div
    id="doekoefilter"
    class="uk-margin"
  >
    <select
      class="uk-select"
      v-model.lazy="filterSelected"
      :change="changeOption()"
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
import store from '../store';

export default {
  name: 'DoekoeFilter',
  data() {
    return {
      filterSelected: store.state.quarter,
      optionValues: [
        { id: 1, value: 'Quarter 1' },
        { id: 2, value: 'Quarter 2' },
        { id: 3, value: 'Quarter 3' },
        { id: 4, value: 'Quarter 4' },
      ],
    };
  },
  methods: {
    changeOption() {
      store.commit('changeQuarter', this.filterSelected);
    },
  },
};
</script>

<style scoped>

</style>

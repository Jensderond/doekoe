<template>
    <div class="controls__top">
      <DoekoeFilter />
      <v-btn color="primary" large block to="/new">Add Doekoe</v-btn>
    </div>
</template>

<script>
const DoekoeFilter = () => import('@/components/DoekoeFilter');

export default {
  name: 'TopControls',
  components: {
    DoekoeFilter,
  },
};
</script>

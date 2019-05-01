<template>
  <v-container>
    <BottomNavigation />
  </v-container>
</template>

<script>
const BottomNavigation = () => import('@/components/BottomNavigation');

export default {
  name: 'Footer',
  components: {
    BottomNavigation,
  },
};
</script>

<style scoped>
</style>

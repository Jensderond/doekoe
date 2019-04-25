<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
    <small>Made without
      <img
        class="uk-svg"
        :src="require('../assets/dollar.svg')"
        height="20"
        width="20"
      >
      in The Netherlands</small>
      </v-flex>
    </v-layout>

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

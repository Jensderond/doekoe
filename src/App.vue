<template>
  <v-app>
    <v-progress-linear v-show="loading" :indeterminate="true" />

    <Header />

    <v-content>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

const Header = () => import('@/components/Header');
const Footer = () => import('@/components/Footer');

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState({
      loading: state => state.doekoes.all.loading,
      // doekoes: state => state.doekoes.all,
    }),
  },
};
</script>

<style>
.application--wrap {
  min-height: unset;
}
</style>

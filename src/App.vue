<template>
  <v-app>
    <v-progress-linear v-show="loading" :indeterminate="true" />

    <Header />

    <v-content>
      <transition
        :name="transitionName"
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
  data() {
    return {
      transitionName: 'slight-right',
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      this.transitionName = toDepth > fromDepth ? 'slide-right' : 'slide-left';
    },
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
.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active {
  transition: 350ms;
  transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
}
.slide-right-enter,
.slide-left-leave-to {
  transform: translate(100%, 0);
}
.slide-right-leave-to,
.slide-left-enter {
  transform: translate(-110%, 0);
}

.slide-right-enter-active,
.slide-left-enter-active {
  position: absolute;
  top: 0;
  transition-delay: 25ms;
}

.application--wrap {
  min-height: unset;
}
</style>

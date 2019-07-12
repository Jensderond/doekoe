<template>
  <v-app dark>
    <v-progress-linear v-show="loading" :indeterminate="true" />
    <NavigationDrawer name="Doekoe.sh" current-route />
    <Header />

    <v-content class="pa-0">
      <transition name="fade" mode="out-in" :duration="300">
        <router-view />
      </transition>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { mapState } from "vuex";

const Header = () => import("@/components/Header");
const NavigationDrawer = () =>
  import("@/components/Navigation/NavigationDrawer");
const Footer = () => import("@/components/Footer");

export default {
  name: "App",
  components: {
    Header,
    NavigationDrawer,
    Footer
  },
  data() {
    return {
      transitionName: "fade-in"
    };
  },
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.length;
  //     const fromDepth = from.path.length;
  //     this.transitionName = toDepth > fromDepth ? "slide-right" : "slide-left";
  //   }
  // },
  computed: {
    ...mapState({
      loading: state => state.doekoes.all.loading
      // doekoes: state => state.doekoes.all,
    })
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active {
  transition: 350ms;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
</style>

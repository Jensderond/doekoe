<template>
  <div
    id="app"
    class="uk-container"
  >
    <UiPreloader :show="loading" />
    <div><h1>Doekoes</h1></div>
    <Header />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';

const UiPreloader = () => import('@/components/keenUI/UiPreloader');
const Header = () => import('@/components/header/Header');
const Footer = () => import('@/components/footer/Footer');

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    UiPreloader,
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
.uk-align-center.vdp-datepicker__calendar {
  position: relative !important;
}
/* .vdp-datepicker__calendar {
  background: #202b3c !important;
}
.vdp-datepicker__calendar header .prev:not(.disabled):hover,
.vdp-datepicker__calendar header .next:not(.disabled):hover,
.vdp-datepicker__calendar header .up:not(.disabled):hover {
  background: #111821 !important;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: 1px solid #28946b !important;
}
.vdp-datepicker__calendar .cell.selected {
  background: #28946b !important;
}
.vdp-datepicker__calendar .cell.selected:hover {
  background: #1d6d49 !important;
} */
</style>

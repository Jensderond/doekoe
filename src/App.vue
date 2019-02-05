<template>
  <div
    id="app"
    class="uk-container"
  >
    <MenuToggle />
    <notifications
      group="auth"
      position="center left"
    />
    <img
      class="uk-logo uk-margin-medium-bottom uk-svg"
      src="./assets/logo.svg"
      height="80"
      width="80"
    >
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
import MenuToggle from '@/components/menu/MenuToggle';
import Footer from '@/components/footer/Footer';

export default {
  name: 'App',
  components: {
    MenuToggle,
    Footer,
  },
};
</script>

<style>
html {
  background-color: #243447;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 40px;
  margin-bottom: 60px;
}
.uk-align-center.vdp-datepicker__calendar {
  position: relative !important;
}
.vdp-datepicker__calendar {
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
}
</style>

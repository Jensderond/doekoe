<template>
  <div
    id="app"
    class="uk-container"
  >
    <img
      class="uk-logo uk-margin-medium-bottom uk-svg"
      src="./assets/logo.svg"
      height="150"
      width="150"
    >
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html {
  /* background-image: url('./assets/canvas.png'); */
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
  background: #202b3c;
}
.vdp-datepicker__calendar header .prev:not(.disabled):hover,
.vdp-datepicker__calendar header .next:not(.disabled):hover,
.vdp-datepicker__calendar header .up:not(.disabled):hover {
  background: #111821;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: 1px solid #28946b;
}
.vdp-datepicker__calendar .cell.selected {
  background: #28946b;
}
.vdp-datepicker__calendar .cell.selected:hover {
  background: #1d6d49;
}
</style>

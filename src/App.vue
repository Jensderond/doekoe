<template>
  <div id="app" class="uk-container">
    <img class="uk-logo uk-margin-small-right uk-svg"
      src="./assets/money.svg" height="150" width="150">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html {
  background-image: url('./assets/canvas.png');
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>

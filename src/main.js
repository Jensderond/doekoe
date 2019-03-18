// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { router } from './_helpers';
import { store } from './_store';
import './assets/main.scss';

const App = () => import('./App');

Vue.config.productionTip = false;


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // eslint-disable-next-line no-console
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      // eslint-disable-next-line no-console
      console.log('SW registration failed: ', registrationError);
    });
  });
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
  store,
});

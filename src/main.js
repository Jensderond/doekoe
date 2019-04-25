import Vue from 'vue';
import './plugins/axios';
import './plugins/vuetify';
import './registerServiceWorker';
import { router } from './_helpers';
import { store } from './_store';
import './assets/main.scss';

const App = () => import('./App');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

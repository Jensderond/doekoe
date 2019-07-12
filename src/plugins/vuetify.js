import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Vuelidate from 'vuelidate';
import 'vuetify/src/stylus/app.styl';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#f2683f",
    secondary: "#0ac37f",
    accent: colors.indigo.base // #3F51B5
  }
});

Vue.use(Vuelidate);

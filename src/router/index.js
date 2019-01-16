import Vue from 'vue';
import Router from 'vue-router';
import DoekoeList from '@/components/DoekoeList';
import DoekoeForm from '@/components/DoekoeForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DoekoeList',
      component: DoekoeList,
    },
    {
      path: '/new',
      name: 'DoekoeForm',
      component: DoekoeForm,
    },
  ],
});

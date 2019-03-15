import Vue from 'vue';
import Router from 'vue-router';

const DoekoeOverview = () => import('@/components/overview/DoekoeOverview');
const DoekoeList = () => import('@/components/list/DoekoeList');
const DoekoeForm = () => import('@/components/form/DoekoeForm');
const LoginPage = () => import('@/components/login/LoginPage');
const RegisterPage = () => import('@/components/register/RegisterPage');
const AboutPage = () => import('@/components/aboutUs/AboutPage');


Vue.use(Router);

// eslint-disable-next-line import/prefer-default-export
export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'DoekoeOverview',
      component: DoekoeOverview,
    },
    {
      path: '/list',
      name: 'DoekoeList',
      component: DoekoeList,
    },
    {
      path: '/new',
      name: 'DoekoeForm',
      component: DoekoeForm,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/register',
      component: RegisterPage,
    },
    {
      path: '/about-us',
      component: AboutPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  return next();
});

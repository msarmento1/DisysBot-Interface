import Vue from 'vue';
import Router from 'vue-router';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});

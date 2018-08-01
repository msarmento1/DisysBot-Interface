import Vue from 'vue';
import Router from 'vue-router';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

const router = new Router({
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
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      redirect: '/sign-in',
    },
  ],
});

// // Adds a navigation guard in order to protect signed in exclusive routes
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     next();
//   } else {
//     next('/sign-in');
//   }
// });

export default router;

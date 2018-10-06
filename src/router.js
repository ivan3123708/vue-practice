import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Users from './components/Users.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/users',
      component: Users,
      name: 'users'
    }
  ]
});

export default router;
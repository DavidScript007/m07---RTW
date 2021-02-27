import Vue from 'vue';
import VueRouter from 'vue-router';
import startscreen from '../views/startscreen.vue';
import homeuser from '../views/homeuser.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'startscreen',
    component: startscreen,
  },

  {
    path: '/homeuser',
    name: 'homeuser',
    component: homeuser,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

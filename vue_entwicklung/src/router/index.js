import Vue from 'vue';
import VueRouter from 'vue-router';
import startscreen from '../views/startscreen.vue';
import homeuser from '../views/homeuser.vue';
import rtwinfo1 from '../views/rtwinfo1.vue';
import rtwinfo2 from '../views/rtwinfo2.vue';


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

  {
    path: '/rtwinfo1',
    name: 'rtwinfo1',
    component: rtwinfo1,
  },

  {
    path: '/rtwinfo2',
    name: 'rtwinfo2',
    component: rtwinfo2,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/categories/:id',
    name: 'ProductsCategoryView',
    component: function() {
      return import('../views/ProductsCategoryView.vue');
    },
    props: true,
  },
  {
    path: '/products/:id',
    name: 'ProductView',
    component: function() {
      return import('../views/ProductView.vue');
    },
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

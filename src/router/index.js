import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/machines',
    name: 'machines',
    component: () => import('../views/Machines.vue')
  },
  {
    path: '/machine/:id',
    name: 'machine',
    component: () => import('../views/Machine.vue')
  }
];

const router = new VueRouter({ routes });

export default router;

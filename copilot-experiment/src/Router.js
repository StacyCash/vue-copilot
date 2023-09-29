import { createRouter, createWebHistory } from 'vue-router';
import KidsSite from './components/KidsSite.vue';
import AdultSite from './components/AdultSite.vue';
import NameAge from './components/NameAge.vue';

const routes = [
    { path: '/', component: NameAge },
    { path: '/adult', component: AdultSite },
    { path: '/kids', component: KidsSite },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
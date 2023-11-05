
import AppHome from './components/AppHome.vue'
import AppContact from './components/AppContact.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: AppHome },
  { path: '/contact', component: AppContact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

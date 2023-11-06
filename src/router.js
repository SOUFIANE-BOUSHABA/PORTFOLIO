
import AppHome from './components/AppHome.vue'
import AppContact from './components/AppContact.vue'
import AppAbout from './components/AppAbout.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: AppHome },
  { path: '/contact', component: AppContact },
  { path: '/about', component: AppAbout },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


import AppHome from './components/AppHome.vue'
import AppContact from './components/AppContact.vue'
import AppAbout from './components/AppAbout.vue'
import AppPortfolio from './components/AppPortfolio.vue'
import AppError from './components/AppError.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: AppHome },
  { path: '/contact', component: AppContact },
  { path: '/about', component: AppAbout },
  { path: '/portfolio', component: AppPortfolio },
  { path: '/:pathMatch(.*)*', component: AppError },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

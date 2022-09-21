import { createRouter, createWebHistory } from "vue-router";
import VAbout from '../views/VAbout'
import VHome from '../views/VHome'

const routes = [
  {
    path: '/',
    name: 'VHome',
    component: VHome
  },
  {
    path: '/about',
    name: 'VAbout',
    component: VAbout
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, 
})

export default router
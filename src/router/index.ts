import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: {
        name: 'search'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/index.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/wishlist/index.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/minesweeper',
      name: 'minesweeper',
      component: () => import('../views/MineSweeperView.vue')
    }
  ]
})

export default router

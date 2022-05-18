import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardPage from '@/pages/Dashboard-page.vue'
import LoginPage from '@/pages/login-page.vue'
import HomePage from '@/pages/homepage-page.vue'
import RegisterPage from '@/pages/register-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import HomeView from '../views/users/HomeView.vue'
import AboutView from '../views/users/AboutView.vue'
import ContactView from '@/views/users/ContactView.vue'
import CareerView from '@/views/users/CareerView.vue'
import ServiceView from '@/views/users/ServiceView.vue'

import LoginView from '@/views/admin/LoginView.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        },
        {
          path: 'service',
          name: 'service',
          component: ServiceView
        },
        {
          path: 'career',
          name: 'career',
          component: CareerView
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView
        },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView,
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: AdminDashboard,
          meta: { requiresAuth: true }
        }
      ],
    },
    {
      path: '/:pathMatch(.*)*', // Bắt tất cả các route không tồn tại
      redirect: '/',
    },

  ]
})

// Bảo vệ route với meta requiresAuth
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'login' }); // Chuyển hướng đến trang login nếu chưa đăng nhập
  } else {
    next();
  }
});

export default router

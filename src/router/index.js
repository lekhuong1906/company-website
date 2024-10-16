import { createRouter, createWebHistory } from 'vue-router'
// import store from '../store';

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import HomeView from '../views/users/HomeView.vue'
import AboutView from '../views/users/AboutView.vue'
import ContactView from '@/views/users/ContactView.vue'
import CareerView from '@/views/users/CareerView.vue'
import ServiceView from '@/views/users/ServiceView.vue'

import LoginView from '@/views/admin/LoginView.vue'
import AdminDashboard from '@/views/admin/DashboardView.vue'

import CareerManagementView from '@/views/admin/careers/CareerManagementView.vue';
import AddNewCareer from '@/views/admin/careers/AddNewCareerView.vue';
import EditCareer from '@/views/admin/careers/EditCareerView.vue';

import UserManagementView from '@/views/admin/users/UserManagementView.vue';

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
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: AdminDashboard,
        },
        {
          path: 'career-manage',
          name: 'career-manage',
          component: CareerManagementView,
        },
        {
          path: 'career-add',
          name: 'career-add',
          component: AddNewCareer,
        },
        {
          path: 'career-edit/:id',
          name: 'career-edit',
          component: EditCareer,
          props : true
        },
        
        {
          path: 'users-manage',
          name: 'users-manage',
          component: UserManagementView,
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/:pathMatch(.*)*', // Bắt tất cả các route không tồn tại
      redirect: '/',
    },

  ]
})

// Bảo vệ route với meta requiresAuth
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(('token'))
  if (to.meta.requiresAuth) {
    if (!token) {
      next({ name: 'login' })
    }
    next();
  } else {
    if (token && (to.name == 'login' || to.name == 'register')) {
      next({ name: 'dashboard' })
    }
    next();
  }

});

export default router

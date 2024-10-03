import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import HomeView from '../views/users/HomeView.vue'
import AboutView from '../views/users/AboutView.vue'
import ContactView from '@/views/users/ContactView.vue'
import CareerView from '@/views/users/CareerView.vue'

import LoginView from '@/views/admin/LoginView.vue'

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
      ],
    },
    {
      path: '/:pathMatch(.*)*', // Bắt tất cả các route không tồn tại
      redirect: '/',
    },

  ]
})

// // Redirect nếu route yêu cầu xác thực (requiresAuth)
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = false // Thay đổi logic này để kiểm tra nếu người dùng đã đăng nhập
//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next({ name: 'Login' }) // Redirect tới trang Login nếu không xác thực
//   } else {
//     next()
//   }
// })

export default router

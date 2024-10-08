<template>
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <div v-html="sidebar_icon"></div>

    </button>

    <aside id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <router-link :to="{ name: 'dashboard' }" class="sidebar__item group">

                        <dashboard-icon />

                        <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'users-manage' }" class="sidebar__item group">

                        <user-icon />

                        <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'careers-manage' }" class="sidebar__item group">

                        <career-icon />

                        <span class="flex-1 ms-3 whitespace-nowrap">Career</span>
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{ name: 'dashboard' }" class="sidebar__item group">

                        <sign-up-icon />

                        <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                    </router-link>
                </li> -->
                <li>
                    <router-link :to="{ name: 'dashboard' }" class="sidebar__item group">

                        <logout-icon />

                        <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';

import DashboardIcon from './icons/DashboardIcon.vue';
import UserIcon from './icons/UserIcon.vue';
import CareerIcon from './icons/CareerIcon.vue';
import SignUpIcon from './icons/SignUpIcon.vue'
import LogoutIcon from './icons/LogoutIcon.vue';
</script>

<style scoped>
.sidebar__item {
    @apply flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700;
}
</style>
<template>
    <header class="fixed h-[100px] z-50 top-0 w-full flex justify-between items-center py-8 px-[120px] bg-white shadow-md">
        <!-- Logo -->
        <div class="h-[40px] w-[150px]">
            <img class="w-full h-full" :src="logo" alt="Logo Optimizer">
        </div>

        <!-- Navigation Links -->
        <nav class="flex justify-end space-x-6 text-gray-600">
            <RouterLink class="hover:text-primary-orange font-semibold text-primary-blue" :to="{ name: 'home' }">Home</RouterLink>
            <RouterLink class="hover:text-primary-orange font-semibold " :to="{ name: 'about' }">About</RouterLink>
            <RouterLink class="hover:text-primary-orange font-semibold " :to="{ name: 'service' }">Service</RouterLink>
            <RouterLink class="hover:text-primary-orange font-semibold " :to="{ name: 'career' }">Career</RouterLink>
            <RouterLink class="hover:text-primary-orange font-semibold " :to="{ name: 'contact' }">Contact</RouterLink>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import logo from '../assets/logo.jpg';
</script>

<style lang="css" scoped>

</style>
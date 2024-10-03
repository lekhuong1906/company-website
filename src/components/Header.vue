<template>
    <header class="fixed h-[102px] top-0 w-full flex justify-between items-center py-8 px-[120px] bg-white shadow-md">
        <!-- Logo -->
        <div class="text-2xl font-bold text-blue-600">
            Cadence<span class="text-brown-500">.</span>
        </div>

        <!-- Navigation Links -->
        <nav class="flex justify-end space-x-6 text-gray-600">
            <RouterLink class="hover:underline font-semibold text-blue-800" :to="{ name: 'home' }">Home</RouterLink>
            <RouterLink class="hover:underline font-semibold " :to="{ name: 'about' }">About</RouterLink>
            <RouterLink class="hover:underline font-semibold " :to="{ name: 'career' }">Career</RouterLink>
            <RouterLink class="hover:underline font-semibold " :to="{ name: 'contact' }">Contact</RouterLink>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="css" scoped>

</style>
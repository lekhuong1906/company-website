<template>
  <admin-side-bar />
  <div id="main" class="p-4 sm:ml-64 bg-white dark:bg-gray-700">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

      <router-view />

    </div>
  </div>
  <admin-footer />
</template>

<script setup>
import { RouterView } from 'vue-router';
import AdminSideBar from '@/components/AdminSideBar.vue';
import AdminFooter from '@/components/AdminFooter.vue';
</script>

<style>
#main {
  min-height: calc(100vh - 32px);
}
</style>

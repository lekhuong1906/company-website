<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
main {
    min-height: 100vh;
    padding: 0 120px;

}
</style>
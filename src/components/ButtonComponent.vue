<template>
    <button :id="id" :type="type" class="item__btn">
        {{ text }}
    </button>
</template>

<script setup>
defineProps({
    id: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
        default: 'Submit'
    }
})
</script>

<style scoped>
.item__btn {
    @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
}

.item__btn--primary {}
</style>
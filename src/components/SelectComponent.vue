<template>
    <div>
        <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ title }}
        </label>
        <select :id="id" class="item__select">
            <option selected>
                {{ dataOptions.length > 0 ? 'Choose a level' : 'Loading...' }}
            </option>
            <option v-for="(item, index) in dataOptions" :key="index" :value="item.id">{{ item.name }}</option>
        </select>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    dataOptions: {
        type: Array,
        required: true,
    }
})

</script>

<style scoped>
.item__select {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
</style>
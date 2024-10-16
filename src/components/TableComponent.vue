<template>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Job Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Department
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(job, index) in jobs" :key="index"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">{{ job.name }}</td>
                <td class="px-6 py-4">{{ job.department }}</td>
                <td class="px-6 py-4">{{ job.amount }}</td>
                <td class="px-6 py-4">{{ job.status }}</td>
                <td class="px-6 py-4">
                    <router-link :to="{ name: 'career-add' }"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                    </router-link>
                </td>

            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    jobs: {
        type: Array,
        required: true,
    }
})
</script>
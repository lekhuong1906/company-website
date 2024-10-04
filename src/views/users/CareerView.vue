<template>
    <main class="mt-[100px]">
        <div class="grid grid-flow-col gap-4 py-20">
            <div class="col-span-1 border-r-2">
                <div class="flex flex-col text-left mr-4 gap-4 ">
                    <button v-for="(job, index) in jobs" :key="index" class="hover:underline hover:text-primary-orange p-4">{{ job.name }}</button>
                </div>
            </div>
            <div class="col-span-2 p-4">

                <JobItem />

            </div>
        </div>
    </main>
</template>

<script setup>
import JobItem from '@/components/JobItem.vue';

const jobs = [
    {
        name: 'Unity Dev',
        count: 12
    },
    {
        name: 'Hr',
        count: 0
    },
    {
        name: 'Designer',
        count: 0
    },
    {
        name: 'Web Dev',
        count: 0
    }
]
console.log(jobs);


</script>
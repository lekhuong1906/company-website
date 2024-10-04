<template>
    <div v-for="(info, index) in jobs" :key="index"
        class="text-gray-500 border-2 border-gray-300 rounded-xl px-6 py-2 cursor-pointer group hover:shadow-lg hover:shadow-gray-400/50 mb-2">
        <div class="flex justify-between">

            <h3 class="font-bold group-hover:text-primary-orange">{{ info.career_name }}
            </h3>
            <!-- <p class="text-sm text-green-400">22-04-2022</p> -->
        </div>
        <div class="flex justify-between ">
            <div class="flex gap-4">
                <div class="flex flex-col">
                    <p class="">{{ info.career_description }}</p>
                </div>
            </div>
        </div>
        <!-- <hr> -->
        <!-- <p>22-04-2022</p> -->
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useJobItem } from '@/composables/useJobItem';

const { getAllJob } = useJobItem();

const jobs = ref();
onMounted(async () => {
    jobs.value = await getAllJob();
    console.log(jobs);
})

</script>
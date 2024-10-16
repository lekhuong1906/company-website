<template>
    <h1 class="font-bold text-gray-900 dark:text-white text-4xl mb-8">Add New Career</h1>
    <form @submit.prevent="addNewJob">
        <div class="grid gap-6 mb-6 md:grid-cols-2">

            <SelectComponent id="department" title="Select Department" :dataOptions="data.departments"
                v-model="data.form.department_id" />

            <SelectComponent id="job-level" title="Select Job Level" :dataOptions="data.levels"
                v-model="data.form.level" />

            <InputComponent id="job-name" type="text" title="Enter Job Name" placeholder="Enter Job Name"
                v-model="data.form.name" />

            <InputComponent id="job-amount" type="number" title="Amount" placeholder="Amount"
                v-model="data.form.amount" />

                <InputComponent id="end-date" type="date" title="End Date" placeholder="Amount"
                v-model="data.form.end_date" />

        </div>

        <div class="mb-6">
            <TextAreaComponent id="description" title="Job Descriptions" placeholder="Enter job descriptions"
                v-model="data.form.description" />
        </div>

        <div class="mb-6">
            <TextAreaComponent id="requirement" title="Job Requirements" placeholder="Enter job requirements"
                v-model="data.form.requirements" />
        </div>

        <div class="mb-6">
            <TextAreaComponent id="benefit" title="Benefits" placeholder="Enter benefits"
                v-model="data.form.benefits" />
        </div>

        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <InputComponent id="salary-min" type="number" title="Salary Min" placeholder="Enter salary min"
                v-model="data.form.salary_min" />

            <InputComponent id="salary-max" type="number" title="Salary Max" placeholder="Enter salary max"
                v-model="data.form.salary_max" />
        </div>

        <InputCheckboxComponent id="negotiable" labelTitle="Negotiable" v-model="data.form.negotiable" />

        <ButtonComponent id="submit" type="submit" text="Submit" />

    </form>
</template>

<script setup>
// import { reactive } from 'vue';
import { useDepartmentsStore } from '@/store/department';
import { useJobLeversStore } from '@/store/jobLevel';
import { reactive, onMounted } from 'vue';
import { useJobStore } from '@/store/job';

import SelectComponent from '@/components/SelectComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import TextAreaComponent from '@/components/TextAreaComponent.vue';
import InputCheckboxComponent from '@/components/InputCheckboxComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useRouter } from 'vue-router';

const departmentStore = useDepartmentsStore();
const levelStore = useJobLeversStore();
const jobStore = useJobStore()
const router = useRouter();

const data = reactive({
    departments: [],
    levels: [],
    form: {
        department_id: null,
        level: null,
        name: '',
        amount: null,
        end_date : null,
        description: '',
        requirements: '',
        benefits: '',
        salary_min: null,
        salary_max: null,
        negotiable: 0,
    }
});

const addNewJob = async () => {
    const response = await jobStore.addNewJob(data.form)

    if (response)
        router.push({ name: 'career-manage' })
    console.log('Add Fail')
}


onMounted(async () => {
    await departmentStore.getDepartments();
    await levelStore.getJobLevels()
    data.departments = departmentStore.departments;
    data.levels = levelStore.jobLevels;

    console.log(data.levels.length);
});

</script>
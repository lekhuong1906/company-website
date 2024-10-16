import { defineStore } from "pinia";
import axiosInstance from "@/axios";

export const useJobStore = defineStore('job', {
    state: () => ({
        jobs: [],
    }),
    actions: {
        async getListJob() {
            try {
                const response = await axiosInstance.get('/careers');
                const data = response.data.data;

                this.jobs = data;
            } catch (error) {
                console.error(error);
            }
        },

        async addNewJob(form) {
            try {
                const response = await axiosInstance.post('/careers', form);
                console.log(response);
                if (response)
                    return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        }
    },
})
import { defineStore } from "pinia";
import axiosInstance from "@/axios";

export const useJobLeversStore = defineStore('jobLevel', {
    state: () => ({
        jobLevels: [],
    }),
    actions: {
        async getJobLevels() {
            try {
                const response = await axiosInstance.get('/auth/levels');
                this.jobLevels = response.data.data;
            } catch (error) {
                console.log('Fail to fetch ' + error)
            }
        }
    }
})
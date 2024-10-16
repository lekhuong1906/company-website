import { defineStore } from 'pinia'
import axiosInstance from '@/axios';
import { SERVER } from '@/constants';

export const useDepartmentsStore = defineStore('department', {
    state: () => ({
        departments: [],
        loading: false,
        error: null,
    }),
    actions: {
        async getDepartments() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axiosInstance.get('/auth/departments');
                const data = response.data.data;
                
                this.departments = data;
            } catch (error) {
                this.error = 'Failed to fetch departments';
            } finally {
                this.loading = false;
            }
        },
    },
})
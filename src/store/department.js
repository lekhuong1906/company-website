import axiosInstance from '@/axios';
import { SERVER } from '@/constants';

const state = {
    departments: [],
}

const mutations = {
    SET_DEPARTMENTS(state, departments) {
        state.departments = departments;
    },
}

const actions = {
    async fetchDepartments({ commit }) {
        try {
            const response = await axiosInstance.get(SERVER + 'auth/departments');
            commit('SET_DEPARTMENTS', response.data);
        } catch (error) {
            console.error('Failed to fetch departments:', error);
        }
    },
}

const getters = {
    getDepartments(state) {
        return state.departments;
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
};

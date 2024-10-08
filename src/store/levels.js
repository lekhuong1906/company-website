import axiosInstance from '@/axios';
import { SERVER } from '@/constants';

const state = {
    levels: [],
}

const mutations = {
    SET_LEVELS(state, levels) {
        state.levels = levels;
    },
}

const actions = {
    async fetchLevels({ commit }) {
        try {
            const response = await axiosInstance.get(SERVER + 'auth/levels');
            commit('SET_LEVELS', response.data);
        } catch (error) {
            console.error('Failed to fetch levels:', error);
        }
    },
}

const getters = {
    getLevels(state) {
        return state.levels;
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
};

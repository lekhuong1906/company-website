import axiosInstance from '@/axios';
import { SERVER } from '@/constants';

const state = {
    token: null,
    user: null,
    isAuthenticated: false,
};

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
        state.isAuthenticated = true;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    LOGOUT(state) {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
    }
};

const actions = {
    async login({ commit }, credentials) {
        try {
            console.log(credentials);

            const response = await axiosInstance.post(SERVER + 'login', credentials);

            // Lưu token và user vào store
            commit('SET_TOKEN', response.data.token);
            commit('SET_USER', response.data.user);

            // Lưu token vào localStorage để duy trì phiên làm việc
            localStorage.setItem('token', response.data.token);

            // Cấu hình Authorization header mặc định cho Axios
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            return response.data;

        } catch (error) {
            console.error("Đăng nhập không thành công:", error);
            throw error;
        }
    },

    async logout({ commit }) {
        try {
            await axiosInstance.post(SERVER + 'auth/logout');
            commit('LOGOUT');
            localStorage.removeItem('token');
            delete axiosInstance.defaults.headers.common['Authorization'];
        } catch (error) {
            console.error("Lỗi khi đăng xuất:", error);
        }
    },

    async checkAuthentication({ commit }) {
        const token = localStorage.getItem('token');

        if (token) {
            // Nếu đã có token, gán vào Axios để gửi kèm các request
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            commit('SET_TOKEN', token);

            // Lấy thông tin user từ API nếu cần thiết
            try {
                const response = await axiosInstance.get('user');
                commit('SET_USER', response.data.user);
            } catch (error) {
                console.error("Lỗi xác thực:", error);
                commit('LOGOUT');
            }
        }
    }
};

const getters = {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    token: (state) => state.token ?? localStorage.getItem('token'),
};

export default {
    state,
    mutations,
    actions,
    getters,
};

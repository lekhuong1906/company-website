import axios from 'axios';
import { useStore } from 'vuex';
import { SERVER } from '@/constants';

const token = localStorage.getItem('token');


const axiosInstance = axios.create({
    baseURL: SERVER,
    withCredentials: true,
    withXSRFToken: true,
});

axiosInstance.interceptors.request.use(async (config) => {
    // Only fetch the CSRF token for requests other than `sanctum/csrf-cookie` and non-auth routes
    if (config.url !== '/sanctum/csrf-cookie' && !config.headers['X-CSRF-TOKEN']) {
        await axiosInstance.get('/sanctum/csrf-cookie');
    }

    config.headers['Authorization'] = `Bearer ${token}`;

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;

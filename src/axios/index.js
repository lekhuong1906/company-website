import axios from 'axios';
import { SERVER } from '@/constants';

const axiosInstance = axios.create({
    baseURL: SERVER,
    withCredentials: false,
    withXSRFToken: false,
});

// axiosInstance.interceptors.request.use(async (config) => {
//     // Only fetch the CSRF token for requests other than `sanctum/csrf-cookie` and non-auth routes
//     if (config.url !== '/sanctum/csrf-cookie' && !config.headers['X-CSRF-TOKEN']) {
//         await axiosInstance.get('/sanctum/csrf-cookie');
//     }

//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

export default axiosInstance;

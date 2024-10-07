import { ref } from 'vue';
import axiosInstance from '../axios/index.js';

const error = ref(null);

const login = async ({email, password}) => {
    error.value = null;

    try {
        // Step 2: Send login request
        const response = await axiosInstance.post('/login', ({ email, password }), {
            withCredentials: false,
            withXSRFToken: false,
        });
        console.log('Login successful:', response.data);
        return response.data;
    } catch (error) {
        error.value = error;
        console.error('Login error:', error);
    }
}

const logout = async () => {
    try {
        await axiosInstance.post('/logout');
        console.log('User logged out');
    } catch (error) {
        console.error('Logout error:', error);
    }
}

export function useAdminUser() {
    return { login, logout }
}

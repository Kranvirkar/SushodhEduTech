import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add token to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add response interceptor to catch 401 (unauthorized)
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            // Option 1: Logout user
            localStorage.removeItem('authToken');
            window.location.href = '/sign-in'; // or use React Router navigation

        }
        return Promise.reject(error);
    }
);

export default api;

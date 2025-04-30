/*
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
*/
import axios from 'axios';
import { getAuthToken } from './authService';
import Config from "./config"; // Your token and refresh logic

const api = axios.create({
    baseURL: Config.API_BASE_URL, // Dynamically set the base URL
    timeout: 10000, // Set a reasonable timeout for API requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add token to every request
api.interceptors.request.use(
    (config) => {
        const token = getAuthToken(); // Get token from your storage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle 401 and token refresh
api.interceptors.response.use(
    (response) => response, // Simply return the response if successful
    async (error) => {
        if (error.response && error.response.status === 401) {
                // Option 1: Logout user
                localStorage.removeItem('authToken');
                window.location.href = '/sign-in'; // Redirect to sign-in if token refresh fails
            }
        return Promise.reject(error);
    }
);

export default api;

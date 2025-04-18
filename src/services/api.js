import axios from 'axios';

const api = axios.create({
    baseURL:  process.env.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
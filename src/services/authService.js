import axios from "axios";

export const getAuthToken = () => {
    return localStorage.getItem('authToken'); // Store token in localStorage/sessionStorage
};

export const refreshAuthToken = async () => {
    try {
        const response = await axios.post('/refresh-token', { /* your refresh token data */ });
        const newToken = response.data.token;
        localStorage.setItem('authToken', newToken);
        return true;
    } catch (error) {
        return false;
    }
};

// Function to check if the user is authenticated
export const getAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    return token != null; // Return true if token exists, else false
};

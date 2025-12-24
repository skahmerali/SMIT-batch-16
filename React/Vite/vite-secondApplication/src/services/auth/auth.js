// src/services/auth.js
import { fetchData } from './../apiServices';
import { configuration } from '../config';

/**
 * Handles user login.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 * @returns {Promise<object|null>} User data and token on success, null on failure.
 */
export async function login(email, password) {
    try {
        const data = await apiRequest(`${configuration.baseURL}/api/login`,
            {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });

        // Handle successful login (e.g., store token in localStorage/sessionStorage)
        if (data && data.token) {
            localStorage.setItem('userToken', data.token);
        }
        return data;
    } catch (error) {
        console.error('Login failed:', error.message);
        // Specific error handling for login can go here
        throw error;
    }
}
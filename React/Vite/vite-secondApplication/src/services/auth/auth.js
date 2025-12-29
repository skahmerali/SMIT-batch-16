// src/services/auth.js
import { apiRequest } from './../apiServices';
import { configuration } from '../config';

/**
 * Handles user login.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 * @returns {Promise<object|null>} User data and token on success, null on failure.
 */
export async function Signup(userEmail, userPassword, userLastName, userFirstName) {
    try {
        const data = await apiRequest(`http://localhost:3000/api/signup`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: userEmail, password: userPassword, lName: userLastName, fName: userFirstName }),
            });
        console.log(data, 'line 21');
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
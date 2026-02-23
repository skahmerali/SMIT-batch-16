// src/services/auth.js
import { apiRequest } from "./APIService";


/**
 * Handles user login.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 * @param {string} firstName The user's email.
 * @param {string} lastName The user's password.
 * @returns {Promise<object|null>} User data and token on success, null on failure.
 */
export async function getProducts() {
  try {
    const data = await apiRequest(`/api/product/getProduct`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      //
    });
    console.log(data, "line 21");
    // Handle successful login (e.g., store token in localStorage/sessionStorage)
    
    return data.products;
  } catch (error) {
    console.error("Login failed:", error.message);
    // Specific error handling for login can go here
    throw error;
  }
}

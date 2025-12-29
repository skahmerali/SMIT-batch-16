// import dotenv from 'dotenv';
// dotenv.config();
export const configuration = {
    baseURL: 'import.meta.env.VITE_BACKEND_URL',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        // Potentially load API keys from environment variables here (e.g., process.env.REACT_APP_API_KEY)
    },
};

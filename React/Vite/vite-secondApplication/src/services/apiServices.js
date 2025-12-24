// apiService.js

/**
 * A generic function to make a GET request to an API endpoint.
 * @param {string} url The API endpoint URL.
 * @returns {Promise<any>} A promise that resolves with the JSON data or rejects with an error.
 */
export const fetchData = ({url, params}) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    // If the response is not OK (e.g., 404, 500), reject the promise with an error
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Resolve the promise with the data
                resolve(data);
            })
            .catch(error => {
                // Catch any errors during the fetch or JSON parsing and reject the promise
                console.error("Error fetching data:", error);
                reject(error);
            });
    });
};
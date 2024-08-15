/**
 * Base URL for the API endpoints.
 *
 * @constant {string} BASE_URL - The base URL for the API, used for constructing full endpoint URLs.
 */
const BASE_URL = "http://localhost:3001/api/v1";

/**
 * Sends user credentials to the login endpoint and retrieves the authentication token.
 *
 * This function sends a POST request with user credentials to the `/user/login` endpoint and handles the API response.
 * It logs the credentials sent and any errors encountered during the request.
 * If the login is successful, it returns the JSON response, which typically includes the authentication token.
 * In case of an error, it throws an error with a descriptive message.
 *
 * @param {Object} credentials - The user credentials to be sent for login.
 * @param {string} credentials.email - The email of the user.
 * @param {string} credentials.password - The password of the user.
 *
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API, typically containing the authentication token and user data.
 *
 * @throws {Error} Throws an error if the login request fails or the response is not successful.
 *
 * @example
 * const credentials = { email: 'user@example.com', password: 'password123' };
 * loginUser(credentials)
 *   .then(response => console.log('Login successful:', response))
 *   .catch(error => console.error('Login failed:', error));
 */
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to login: ${errorText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

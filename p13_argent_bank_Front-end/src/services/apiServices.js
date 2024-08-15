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
    console.log("Sending login data:", credentials);

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
    console.log("Login successful:", data);

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Fetches user details from the server using the provided token for authentication.
 *
 * @param {string} token - The authentication token used to authorize the request.
 * @returns {Promise<Object>} - A promise that resolves to the user details.
 */
// export const fetchUserDetails = async (token) => {
//   const response = await fetch(`${BASE_URL}/user/login`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   });

// Vérifiez si la réponse est ok (status 200-299)
//if (!response.ok) {
// Si non, lancez une erreur avec le message d'erreur
// throw new Error(`Error fetching user details: ${response.statusText}`);
//}

// Retournez les données JSON de la réponse
// return response.json();
//};

/**
 * Sends user data to the signup endpoint and retrieves the response.
 *
 * This function sends a POST request with user data to the /user/signup endpoint and handles the API response.
 *
 * @param {Object} userData - The user data to be sent for signup.
 * @param {string} userData.email - The email of the user.
 * @param {string} userData.password - The password of the user.
 * @param {string} userData.username - The username of the user.
 *
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API.
 *
 * @throws {Error} Throws an error if the signup request fails or the response is not successful.
 */
export const signUpUser = async (userData) => {
  try {
    console.log("Sending signup data:", userData);

    const response = await fetch(`${BASE_URL}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to sign up: ${errorText}`);
    }

    const data = await response.json();
    console.log("Signup successful:", data);

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

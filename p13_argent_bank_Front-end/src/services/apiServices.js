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
      const errorData = JSON.parse(errorText);
      const errorMessage = errorData.message || "An unknown error occurred";

      throw new Error(errorMessage);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Sends user data to the signup endpoint and retrieves the response.
 *
 * This function sends a POST request with user data to the `/user/signup` endpoint and handles the API response.
 *
 * @param {Object} userData - The user data to be sent for signup.
 * @param {string} userData.email - The email of the user.
 * @param {string} userData.password - The password of the user.
 * @param {string} userData.username - The username of the user.
 *
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API, typically containing user information or a success message.
 *
 * @throws {Error} Throws an error if the signup request fails or the response is not successful.
 *
 * @example
 * const userData = { email: 'newuser@example.com', password: 'password123', username: 'newuser' };
 * createUser(userData)
 *   .then(response => console.log('Signup successful:', response))
 *   .catch(error => console.error('Signup failed:', error));
 */
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorData = JSON.parse(errorText);
      const errorMessage = errorData.message || "An unknown error occurred";

      throw new Error(errorMessage);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Retrieves user profile information from the profile endpoint using the provided authentication token.
 *
 * This function sends a POST request to the `/user/profile` endpoint with an authorization token and retrieves user profile data.
 * It logs the success message and any errors encountered during the request.
 *
 * @param {string} token - The authentication token used to authorize the request.
 *
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API, typically containing user profile information.
 *
 * @throws {Error} Throws an error if the request fails or the response is not successful.
 *
 * @example
 * const token = 'your-authentication-token';
 * getUserProfile(token)
 *   .then(data => console.log('User profile fetched successfully:', data))
 *   .catch(error => console.error('Failed to fetch user profile:', error));
 */
export const getUserProfile = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorData = JSON.parse(errorText);
      const errorMessage = errorData.message || "An unknown error occurred";

      throw new Error(errorMessage);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Updates user profile information using the provided authentication token and new user data.
 *
 * This function sends a PUT request to the `/user/profile` endpoint with an authorization token and updated user data.
 *
 * @param {string} token - The authentication token used to authorize the request.
 * @param {Object} userData - The updated user data to be sent.
 * @param {string} [userData.email] - The updated email of the user (optional).
 * @param {string} [userData.password] - The updated password of the user (optional).
 * @param {string} [userData.username] - The updated username of the user (optional).
 *
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API, typically containing updated user profile information.
 *
 * @throws {Error} Throws an error if the update request fails or the response is not successful.
 *
 * @example
 * const token = 'your-authentication-token';
 * const updatedUserData = { email: 'newemail@example.com', username: 'newusername' };
 * updateUserProfile(token, updatedUserData)
 *   .then(data => console.log('User profile updated successfully:', data))
 *   .catch(error => console.error('Failed to update user profile:', error));
 */
export const updateUserProfile = async (token, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorData = JSON.parse(errorText);
      const errorMessage = errorData.message || "An unknown error occurred";

      throw new Error(errorMessage);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing user authentication state.
 *
 * This slice manages authentication-related state and actions, including user login, signup, and logout.
 * It handles:
 * - **Login**: Updates state to reflect loading status and stores the authentication token.
 * - **Login Success**: Updates state with the authentication token and user information, saves them to local storage.
 * - **Login Failure**: Sets error state when login fails.
 * - **Fetch User Profile Success**: Updates user profile information in state and local storage.
 * - **Fetch User Profile Failure**: Sets error state when fetching user profile fails.
 * - **Signup**: Updates state to reflect loading status.
 * - **Signup Success**: Updates state with new user information and sets `isSignUpSuccessful`.
 * - **Signup Failure**: Sets error state and updates `isSignUpSuccessful` when signup fails.
 * - **Logout**: Clears user information, token, and updates local storage.
 *
 * @typedef {Object} AuthState
 * @property {Object} user - The user object containing details like `id`, `firstName`, `lastName`, `email`, `createdAt`, and `updatedAt`. Default is an empty user object.
 * @property {boolean} loading - Indicates if a login or signup request is in progress.
 * @property {string|null} error - Stores error messages related to authentication actions.
 * @property {string|null} token - The authentication token used for user sessions.
 * @property {boolean} isSignUpSuccessful - Indicates if the signup process was successful.
 *
 * @returns {Object} The slice containing the reducers and actions for managing authentication state.
 * @property {Function} loginRequest - Action to initiate login and set loading state.
 * @property {Function} loginSuccess - Action to handle successful login.
 * @property {Function} loginFailure - Action to handle login failure.
 * @property {Function} fetchUserProfileRequest - Action to initiate fetching user profile.
 * @property {Function} fetchUserProfileSuccess - Action to handle successful user profile fetch.
 * @property {Function} fetchUserProfileFailure - Action to handle user profile fetch failure.
 * @property {Function} signupRequest - Action to initiate signup and set loading state.
 * @property {Function} signupSuccess - Action to handle successful signup.
 * @property {Function} signupFailure - Action to handle signup failure.
 * @property {Function} clearFieldError - Action to clear specific field errors.
 * @property {Function} logout - Action to handle user logout.
 * @property {Function} updateFirstName - Action to update the user's first name.
 * @property {Function} updateLastName - Action to update the user's last name.
 * @property {Function} updateDataFailure - Action to handle failure in updating user data.
 *
 * @example
 * Dispatch login action
 * dispatch(loginRequest({ email: 'user@example.com', password: 'password123' }));
 *
 * Dispatch signup action
 * dispatch(signupRequest({ email: 'user@example.com', password: 'password123' }));
 */

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) ||
    JSON.parse(localStorage.getItem("user")) || {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      createdAt: "",
      updatedAt: "",
    },
  loading: false,
  error: { email: null, password: null, general: null },
  token:
    sessionStorage.getItem("token") || localStorage.getItem("token") || null,
  isSignUpSuccessful: false,
  isLoggedIn:
    !!sessionStorage.getItem("token") || !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = {};
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = {};
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    fetchUserProfileRequest(state) {
      state.loading = true;
    },
    fetchUserProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = {};
    },
    fetchUserProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    signupRequest: (state) => {
      state.loading = true;
      state.error = {};
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isSignUpSuccessful = true;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.isSignUpSuccessful = false;
    },
    clearFieldError: (state, action) => {
      delete state.error[action.payload];
    },
    logout: (state) => {
      state.user = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isSignUpSuccessful = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
    },
    updateFirstName: (state, action) => {
      state.user.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.user.lastName = action.payload;
    },
    updateDataFailure: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  clearFieldError,
  logout,
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  updateFirstName,
  updateLastName,
  updateDataFailure,
} = authSlice.actions;

export default authSlice.reducer;

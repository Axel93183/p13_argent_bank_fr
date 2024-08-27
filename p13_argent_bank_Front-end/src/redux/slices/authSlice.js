import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfileThunk } from "./authThunks";

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
 * @property {Function} login - Action to initiate login and set loading state.
 * @property {Function} loginSuccess - Action to handle successful login.
 * @property {Function} loginFailure - Action to handle login failure.
 * @property {Function} fetchUserProfileSuccess - Action to handle successful user profile fetch.
 * @property {Function} fetchUserProfileFailure - Action to handle user profile fetch failure.
 * @property {Function} signup - Action to initiate signup and set loading state.
 * @property {Function} signupSuccess - Action to handle successful signup.
 * @property {Function} signupFailure - Action to handle signup failure.
 * @property {Function} logout - Action to handle user logout.
 *
 * @example
 * Dispatch login action
 * dispatch(login({ email: 'user@example.com', password: 'password123' }));
 *
 * Dispatch signup action
 * dispatch(signup({ email: 'user@example.com', password: 'password123' }));
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
  error: null,
  token:
    sessionStorage.getItem("token") || localStorage.getItem("token") || null,
  isSignUpSuccessful: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserProfileSuccess: (state, action) => {
      state.user = action.payload.user;
      state.error = null;
    },
    fetchUserProfileFailure: (state, action) => {
      state.error = action.payload;
    },
    signup: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isSignUpSuccessful = true;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSignUpSuccessful = false;
    },
    logout: (state) => {
      state.user = {};
      state.token = null;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfileThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateUserProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  login,
  loginSuccess,
  loginFailure,
  signup,
  signupSuccess,
  signupFailure,
  logout,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  updateFirstName,
  updateLastName,
} = authSlice.actions;

export default authSlice.reducer;

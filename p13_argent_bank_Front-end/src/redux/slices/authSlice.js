import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing authentication state. This slice handles actions related to user authentication including login initiation,
 * successful login, failed login, and logout. It maintains the state of the authentication process, user information, and authentication token.
 *
 * @typedef {Object} AuthState
 * @property {Object|null} user - The authenticated user object. Contains user details when authenticated, or `null` if not authenticated.
 * @property {boolean} loading - Indicates if a login request is currently in progress (`true` if loading, `false` otherwise).
 * @property {string|null} error - Stores any error message related to authentication. `null` if no errors are present.
 * @property {string|null} token - The authentication token received upon successful login. `null` if not authenticated or token is not available.
 *
 * @type {Object} authSlice
 * @property {Function} login - Action to initiate the login process. Sets `loading` to `true` and clears `error`.
 * @property {Function} loginSuccess - Action dispatched on successful login. Updates `user` and `token` with payload data and sets `loading` to `false`.
 * @property {Function} loginFailure - Action dispatched when login fails. Sets `error` with payload data and `loading` to `false`.
 * @property {Function} logout - Action to clear user data and token, effectively logging out the user.
 */

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
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
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signup: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
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
} = authSlice.actions;
export default authSlice.reducer;

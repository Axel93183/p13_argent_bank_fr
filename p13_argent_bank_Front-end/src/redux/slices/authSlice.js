import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  loading: false,
  error: null,
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
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
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      state.isLoggedIn = true;
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
      state.isSignUpSuccessful = true;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSignUpSuccessful = false;
    },
    logout: (state) => {
      console.log("Dispatching logout action"); // Log when logout is called
      state.user = { id: "", firstName: "", lastName: "", email: "" };
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
    updateFirstName: (state, action) => {
      state.user.firstName = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user)); // Mettre à jour le localStorage
    },
    updateLastName: (state, action) => {
      state.user.lastName = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user)); // Mettre à jour le localStorage
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
  updateFirstName,
  updateLastName,
} = authSlice.actions;

export default authSlice.reducer;

import {
  createUser,
  getUserProfile,
  loginUser,
  updateUserProfile,
} from "../../services/apiServices";
import {
  fetchUserProfileFailure,
  fetchUserProfileSuccess,
  loginFailure,
  loginSuccess,
  signupFailure,
  signupSuccess,
  updateFirstName,
  updateLastName,
} from "../slices/authSlice";

/**
 * Middleware for handling authentication-related actions in Redux.
 *
 * This middleware intercepts actions related to user login and signup. It performs asynchronous API calls to handle these actions:
 * - **Login**: Sends login credentials to the server, processes the response to store the authentication token, and fetches the user profile.
 * - **Signup**: Sends user registration details to the server and handles the response accordingly.
 *
 * On successful login, it dispatches `loginSuccess` with the token and `fetchUserProfileSuccess` with the user profile data.
 * On login or signup failure, it dispatches `loginFailure`, `fetchUserProfileFailure`, or `signupFailure` with the error message.
 *
 * @param {Object} param - The parameter object.
 * @param {Function} param.dispatch - The dispatch function to send actions to the Redux store.
 * @returns {Function} The middleware function that processes actions.
 *
 * @example
 * const action = { type: 'user/login', payload: { email: 'user@example.com', password: 'password123' } };
 * dispatch(action);
 */

const authMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === "user/login") {
      try {
        const response = await loginUser(action.payload);
        const token = response.body.token;
        const userProfile = await getUserProfile(token);

        dispatch(loginSuccess({ token }));
        dispatch(fetchUserProfileSuccess({ user: userProfile.body }));

        if (action.payload.rememberMe) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userProfile.body));
        } else {
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user", JSON.stringify(userProfile.body));
        }
      } catch (error) {
        dispatch(loginFailure(error.toString()));
        dispatch(fetchUserProfileFailure(error.toString()));
      }
    }

    if (action.type === "user/signup") {
      try {
        const response = await createUser(action.payload);
        dispatch(signupSuccess(response));
      } catch (error) {
        dispatch(signupFailure(error.toString()));
      }
    }

    if (action.type === "user/updateProfile") {
      try {
        const { token, userData } = action.payload;
        const updatedUser = await updateUserProfile(token, userData);
        dispatch(updateFirstName(updatedUser.firstName));
        dispatch(updateLastName(updatedUser.lastName));
      } catch (error) {
        console.error("Profile update failed:", error);
      }
    }

    return next(action);
  };

export default authMiddleware;

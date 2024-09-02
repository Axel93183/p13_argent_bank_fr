import {
  createUser,
  getUserProfile,
  loginUser,
  updateUserProfile,
} from "../../services/apiServices";
import {
  fetchUserProfileFailure,
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
  updateDataFailure,
  updateFirstName,
  updateLastName,
} from "../slices/authSlice";

/**
 * Middleware for handling authentication-related actions in Redux.
 *
 * This middleware intercepts authentication actions, performs the necessary API calls, and dispatches subsequent actions based on the results.
 * It handles:
 * - **Login**: Initiates login request, fetches user profile, and manages tokens and user data.
 * - **Signup**: Initiates signup request and handles success or failure.
 * - **Update Profile**: Updates user profile information and dispatches actions for first and last name updates.
 * - **Fetch Profile**: Fetches user profile information based on the provided token.
 *
 * @param {Object} store - Redux store object.
 * @param {Function} store.dispatch - Dispatch function to send actions.
 * @param {Function} next - Next middleware in the chain.
 * @param {Function} action - The dispatched action.
 * 
 * @returns {Function} The next middleware or final action.
 * 
 * @example
 * dispatch({ type: 'user/login', payload: { email: 'user@example.com', password: 'password123', rememberMe: true } });
 * dispatch({ type: 'user/signup', payload: { email: 'newuser@example.com', password: 'password123' } });
 * dispatch({ type: 'user/updateProfile', payload: { token: 'your-token', userData: { firstName: 'NewName' } } });
 * dispatch({ type: 'user/fetchProfile', payload: { token: 'your-token' } });
 */

const authMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === "user/login") {
      dispatch(loginRequest());
      try {
        const response = await loginUser(action.payload);

        if (response.error) {
          throw new Error(response.error.message || "Login failed");
        }

        const token = response.body.token;

        const userProfile = await getUserProfile(token);

        if (userProfile.error) {
          throw new Error(
            userProfile.error.message || "Failed to fetch user profile"
          );
        }

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
        const message = error.message;
        const errorDetails = {
          email: message.includes("User not found") ? message : null,
          password: message.includes("Password is invalid") ? message : null,
        };

        dispatch(loginFailure({ error: errorDetails }));
        dispatch(fetchUserProfileFailure({ error: errorDetails }));
      }
    }

    if (action.type === "user/signup") {
      dispatch(signupRequest());

      try {
        const response = await createUser(action.payload);

        if (response.error) {
          throw new Error(response.error.message || "Signup failed");
        }

        dispatch(signupSuccess({ user: response.body }));
      } catch (error) {
        const message = error.message;
        const errorDetails = {
          email: message.includes("Email already exists") ? message : null,
          password: message.includes("Password is invalid") ? message : null,
        };

        dispatch(signupFailure({ error: errorDetails }));
      }
    }

    if (action.type === "user/updateProfile") {
      try {
        const { token, userData } = action.payload;

        const updatedUser = await updateUserProfile(token, userData);

        if (updatedUser.error) {
          throw new Error(updatedUser.error.message || "Update failed");
        }

        dispatch(updateFirstName(updatedUser.body.firstName));
        dispatch(updateLastName(updatedUser.body.lastName));
      } catch (error) {
        const message = error.message;
        const errorDetails = {
          general: message,
        };
        dispatch(updateDataFailure({ error: errorDetails }));

        console.error("Profile update failed:", message);
      }
    }

    if (action.type === "user/fetchProfile") {
      dispatch(fetchUserProfileRequest());
      try {
        const userProfile = await getUserProfile(action.payload.token);

        if (userProfile.error) {
          throw new Error(
            userProfile.error.message || "Failed to fetch user profile"
          );
        }

        dispatch(fetchUserProfileSuccess({ user: userProfile.body }));
      } catch (error) {
        dispatch(
          fetchUserProfileFailure({
            error: { general: error.message },
          })
        );
      }
    }

    return next(action);
  };

export default authMiddleware;

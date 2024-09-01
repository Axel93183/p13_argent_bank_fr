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
  loginRequest,
  loginSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
  updateDataFailure,
  updateFirstName,
  updateLastName,
} from "../slices/authSlice";

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

    return next(action);
  };

export default authMiddleware;

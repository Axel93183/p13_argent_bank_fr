import { loginUser, signUpUser } from "../../services/apiServices";
import {
  loginFailure,
  loginSuccess,
  signupFailure,
  signupSuccess,
} from "../slices/authSlice";

/**
 * Redux middleware for handling authentication actions. It intercepts login actions, performs
 * asynchronous API calls to log in the user, and dispatches success or failure actions based on
 * the API response.
 *
 * @param {Object} param - The middleware parameters.
 * @param {Function} param.dispatch - The Redux dispatch function.
 *
 * @returns {Function} The middleware function.
 */

const authMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === "user/login") {
      try {
        const response = await loginUser(action.payload);
        dispatch(
          loginSuccess({
            token: response.body.token,
            user: response.body.user,
          }),
        );
      } catch (error) {
        dispatch(loginFailure(error.toString()));
      }
    }

    if (action.type === "user/signup") {
      try {
        const response = await signUpUser(action.payload);
        console.log("===========================");
        console.log("API Response:", response);
        console.log("===========================");
        dispatch(signupSuccess(response));
      } catch (error) {
        dispatch(signupFailure(error.toString()));
      }
    }
    return next(action);
  };

export default authMiddleware;

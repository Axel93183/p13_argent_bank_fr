import { loginUser } from "../../services/apiServices";
import { loginFailure, loginSuccess } from "../slices/authSlice";

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
        dispatch(loginSuccess(response.body));
      } catch (error) {
        dispatch(loginFailure(error.toString()));
      }
    }
    return next(action);
  };

export default authMiddleware;

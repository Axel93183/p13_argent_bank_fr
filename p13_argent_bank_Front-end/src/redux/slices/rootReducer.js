import { combineReducers } from "redux";
import authReducer from "./authSlice";

/**
 * Combines multiple reducers into a single root reducer for Redux store configuration.
 *
 * This file combines the authentication reducer into the root reducer which manages the state of user authentication.
 *
 * @typedef {Object} RootState
 * @property {Object} user - State managed by the authentication reducer. Contains authentication-related state such as user information, loading status, error messages, and authentication token.
 * @type {Function} rootReducer - The combined reducer function created by `combineReducers`. It combines the individual reducers into a single reducer function that the Redux store uses to manage the state.
 * @returns {Object} The root reducer object, which is used to configure the Redux store.
 */

const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;

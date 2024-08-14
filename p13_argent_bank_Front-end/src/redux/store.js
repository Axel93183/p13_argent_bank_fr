import { configureStore } from "@reduxjs/toolkit";
import authMiddleware from "./middleware/authMiddleware";
import rootReducer from "./slices/rootReducer";

/**
 * Configures and creates a Redux store with the specified root reducer and middleware.
 *
 * @returns {import('@reduxjs/toolkit').Store} The configured Redux store instance.
 */

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

export default store;

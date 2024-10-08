import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

/**
 * Main entry point for the React application.
 *
 * Renders the `App` component inside a `Provider` to connect the Redux store to the React application.
 * Applies global styles from `index.css` and sets up performance measurement with `reportWebVitals`.
 *
 * @function
 * @returns {void} This function does not return a value.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

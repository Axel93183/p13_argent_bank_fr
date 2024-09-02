import React from "react";

import LoginForm from "../../components/Forms/LoginForm/LoginForm";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Login.css";

/**
 * Login component.
 *
 * Renders the login page, including a form for user login.
 * Displays an icon and heading, followed by the `LoginForm` component for user authentication.
 *
 * @component
 * @returns {JSX.Element} The rendered `Login` component, including a login form and page styling.
 *
 * @example
 * <Login />
 */

const Login = () => {
  return (
    <div className="login-container">
      <main className="main bg-dark-login">
        <section className="login-content">
          <FontAwesomeIcon icon={faUserCircle} className="login-icon" />
          <h1>Login</h1>
          <LoginForm />
        </section>
      </main>
    </div>
  );
};

export default Login;

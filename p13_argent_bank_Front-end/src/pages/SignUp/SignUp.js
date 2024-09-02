import React from "react";

import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SignUp.css";

/**
 * SignUp component.
 *
 * Renders the sign-up page, including a user registration form.
 * Displays an icon and heading, followed by the `SignUpForm` component for creating a new user account.
 *
 * @component
 * @returns {JSX.Element} The rendered `SignUp` component, including a sign-up form and page styling.
 *
 * @example
 * <SignUp />
 */

const SignUp = () => {
  return (
    <div className="container-login">
      <main className="main bg-dark-login">
        <section className="login-content">
          <FontAwesomeIcon icon={faUserCircle} className="login-icon" />
          <h1>Sign up</h1>
          <SignUpForm />
        </section>
      </main>
    </div>
  );
};

export default SignUp;

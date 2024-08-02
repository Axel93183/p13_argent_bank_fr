import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SignInForm from "../../components/Forms/SignInForm/SignInForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./SignIn.css";

/**
 * SignIn component.
 * Renders the sign-in page with a form to create a new user account.
 * @returns {JSX.Element} SignIn component.
 */

const SignIn = () => {
  return (
    <div className="container-login">
      <Header />
      <main className="main bg-dark-login">
        <section className="login-content">
          <FontAwesomeIcon icon={faUserCircle} className="login-icon" />
          <h1>Sign in</h1>
          <SignInForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;

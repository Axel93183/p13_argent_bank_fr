import React from "react";

import Footer from "../../components/Footer/Footer";
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";
import Header from "../../components/Header/Header";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SignUp.css";

/**
 * SignUp component.
 * Renders the sign-in page with a form to create a new user account.
 * @returns {JSX.Element} SignUp component.
 */

const SignUp = () => {
  return (
    <div className="container-login">
      <Header />
      <main className="main bg-dark-login">
        <section className="login-content">
          <FontAwesomeIcon icon={faUserCircle} className="login-icon" />
          <h1>Sign up</h1>
          <SignUpForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;

import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Login.css";

/**
 * Login component.
 * Renders the login page with a form for user login.
 * @returns {JSX.Element} Login component.
 */

const Login = () => {
  return (
    <div className="login-container">
      <Header />
      <main className="main bg-dark-login">
        <section className="login-content">
          <FontAwesomeIcon icon={faUserCircle} className="login-icon" />
          <h1>Login</h1>
          <LoginForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

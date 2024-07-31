import React from "react";

import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";

import "./LoginForm.css";

/**
 * LoginForm component.
 * Renders a login form with email, password fields, a remember me checkbox, and a submit button.
 * Handles form submission and logs form data to the console.
 * @returns {JSX.Element} LoginForm component.
 */

const LoginForm = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
      />
      <Checkbox name="rememberMe" textLabel="Remember me" required={false} />
      <Button type="submit" text="Log in" />
      <a className="signin-anchor" href="/signin">
        I'm not registered yet, I want to Sign In.
      </a>
    </Form>
  );
};

export default LoginForm;

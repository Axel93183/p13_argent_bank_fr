import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slices/authSlice";

import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";

import "./LoginForm.css";

/**
 * LoginForm component handles user login through a form. It integrates with Redux to manage authentication state.
 *
 * @returns {JSX.Element} The rendered login form, including fields for email and password, a remember me checkbox, and a submit button.
 * Displays an error message if there is an authentication error.
 */

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const onSubmit = (data) => {
    dispatch(login(data));
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
      <Button type="submit" text="Log in" disabled={loading} />
      {error && <p className="error">{error}</p>}
      <a className="signup-anchor" href="/signup">
        I'm not registered yet, I want to Sign Up.
      </a>
    </Form>
  );
};

export default LoginForm;

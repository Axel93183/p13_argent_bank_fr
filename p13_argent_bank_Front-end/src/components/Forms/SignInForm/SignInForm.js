import React from "react";
import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import "./SignInForm.css";

/**
 * SignInForm component.
 * Renders a sign-in form with fields for email, password, confirm password, first name, last name, and terms agreement.
 * Handles form submission and logs form data to the console.
 * @returns {JSX.Element} SignInForm component.
 */

const SignInForm = () => {
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
      <FormField
        name="confirmPassword"
        label="Confirm your password"
        type="password"
        placeholder="Confirm your password"
        required
      />
      <FormField
        name="firstName"
        label="First Name"
        type="text"
        placeholder="Enter your first name"
        required
      />
      <FormField
        name="lastName"
        label="Last Name"
        type="text"
        placeholder="Enter your last name"
        required
      />
      <Checkbox
        name="terms"
        textLabel="I agree to the terms and conditions"
        required={true}
      />
      <Button type="submit" text="Sign Up" />
      <a className="login-anchor" href="/login">
        Already have an account ? Log in here.
      </a>
    </Form>
  );
};

export default SignInForm;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import "./SignUpForm.css";

/**
 * SignUpForm component.
 * Renders a sign-in form with fields for email, password, confirm password, first name, last name, and terms agreement.
 * Handles form submission and logs form data to the console.
 * @returns {JSX.Element} SignUpForm component.
 */

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { loading, error, isSignUpSuccessful } = useSelector(
    (state) => state.user
  );
  const [localError, setLocalError] = useState({ ...error });
  const [validationError, setValidationError] = useState({});

  const onSubmit = (data) => {
    setValidationError({});
    setLocalError({});

    if (data.password !== data.confirmPassword) {
      setValidationError({
        confirmPassword: "Passwords do not match.",
      });
      return;
    }
    dispatch({ type: "user/signup", payload: data });
  };

  const handleInputChange = (fieldName) => {
    setLocalError({ ...localError, [fieldName]: null });
    if (fieldName === "confirmPassword") {
      setValidationError({ confirmPassword: null });
    }
  };

  const handleLoginLinkClick = () => {
    window.location.href = "/login";
  };

  return (
    <>
      {isSignUpSuccessful ? (
        <div className="signup-success">
          <p>Votre inscription a bien été prise en compte.</p>
          <Button
            className="btn-login-link"
            onClick={handleLoginLinkClick}
            text="Se connecter"
          />
        </div>
      ) : (
        <Form onSubmit={onSubmit}>
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
            error={localError.email}
          />
          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
            error={localError.password}
          />
          <FormField
            name="confirmPassword"
            label="Confirm your password"
            type="password"
            placeholder="Confirm your password"
            required
            error={validationError.confirmPassword}
            onChange={() => handleInputChange("confirmPassword")}
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
          <Button type="submit" text="Sign Up" disabled={loading} />
          <a className="login-anchor" href="/login">
            Already have an account? Log in here.
          </a>
        </Form>
      )}
    </>
  );
};

export default SignUpForm;

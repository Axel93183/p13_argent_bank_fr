import { useDispatch, useSelector } from "react-redux";
import { clearFieldError } from "../../../redux/slices/authSlice";
import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import "./LoginForm.css";

/**
 * LoginForm component.
 * Renders a login form with fields for email and password, and an optional "Remember me" checkbox.
 * Handles form submission and error management, and provides a link to the sign-up page.
 *
 * @component
 * @returns {JSX.Element} The rendered LoginForm component with input fields, submission logic, and navigation link.
 */

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const onSubmit = (data) => {
    dispatch({ type: "user/login", payload: data });
  };

  const handleInputChange = (fieldName) => {
    dispatch(clearFieldError(fieldName));
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
        error={error.email}
        onInput={() => handleInputChange("email")}
      />
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        error={error.password}
        onInput={() => handleInputChange("password")}
      />
      <Checkbox name="rememberMe" textLabel="Remember me" required={false} />
      <Button type="submit" text="Log in" disabled={loading} />
      <a className="signup-anchor" href="/signup">
        I'm not registered yet, I want to Sign Up.
      </a>
    </Form>
  );
};

export default LoginForm;

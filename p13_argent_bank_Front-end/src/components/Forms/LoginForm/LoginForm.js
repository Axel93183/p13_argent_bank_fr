import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const onSubmit = (data) => {
    dispatch({ type: "user/login", payload: data });
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
      />
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        error={error.password}
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

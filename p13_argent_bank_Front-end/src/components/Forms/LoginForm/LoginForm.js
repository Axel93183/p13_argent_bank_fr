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
        error={error.email} // Passer l'erreur spécifique à l'email
      />
      {error.email && <p className="error">{error.email}</p>}{" "}
      {/* Afficher l'erreur sous le champ email */}
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        error={error.password} // Passer l'erreur spécifique au mot de passe
      />
      {error.password && <p className="error">{error.password}</p>}{" "}
      {/* Afficher l'erreur sous le champ password */}
      <Checkbox name="rememberMe" textLabel="Remember me" required={false} />
      <Button type="submit" text="Log in" disabled={loading} />
      {error.general && <p className="error">{error.general}</p>}{" "}
      {/* Afficher les erreurs générales */}
      <a className="signup-anchor" href="/signup">
        I'm not registered yet, I want to Sign Up.
      </a>
    </Form>
  );
};

export default LoginForm;

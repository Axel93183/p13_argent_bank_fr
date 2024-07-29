import { useForm } from "react-hook-form";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./Login.css";

/**
 * Login component.
 * Renders the login page with a form for user login.
 * @returns {JSX.Element} Login component.
 */

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formDataSignIn) => {
    console.log(formDataSignIn);
  };

  return (
    <div className="container-login">
      <Header />
      <main className="main bg-dark-login">
        <section className="login-content">
          <i className="fa fa-user-circle login-icon"></i>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Entrez votre email"
              />
              {errors.email && <p>Email is required</p>}
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && <p>Password is required</p>}
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <input type="submit" value="Log in" className="login-button" />
            <a className="signin-anchor" href="/signin">
              I'm not registered yet, I want to Sign In.
            </a>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

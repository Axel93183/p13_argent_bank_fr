import { useForm } from "react-hook-form";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./SignIn.css";

/**
 * SignIn component.
 * Renders the sign-in page with a form to create a new user account.
 * @returns {JSX.Element} SignIn component.
 */

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formDataSignIn) => {
    console.log(formDataSignIn);
  };

  return (
    <div className="container-sign-in">
      <Header />
      <main className="main bg-dark-signin">
        <section className="login-content">
          <i className="fa fa-user-circle login-icon"></i>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                type="text"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                {...register("confirmPassword")}
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName">Firstname</label>
              <input
                {...register("firstName")}
                type="text"
                id="firstName"
                placeholder="Firstname"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Lastname</label>
              <input
                {...register("lastname")}
                type="text"
                id="lastname"
                placeholder="Lastname"
              />
            </div>
            <input type="submit" value="Sign in" className="login-button" />
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default SignIn;

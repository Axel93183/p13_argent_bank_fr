import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import SignUp from "./pages/SignUp/SignUp";
import User from "./pages/User/User";

/**
 * App component that handles the routing and layout of the application.
 *
 * This component uses React Router to manage navigation between different pages of the app.
 * It conditionally renders pages based on the user's login status and includes a header and footer.
 *
 * @component
 * @returns {JSX.Element} The rendered App component containing routes, header, and footer.
 */

const App = () => {
  const { token } = useSelector((state) => state.user);

  const isTokenValid = () => {
    if (!token) return false;
    try {
      const tokenPayload = JSON.parse(atob(token.split(".")[1]));
      const tokenExpirationDate = new Date(tokenPayload.exp * 1000);
      return tokenExpirationDate > new Date();
    } catch (error) {
      console.error("Invalid token", error);
      return false;
    }
  };

  const isLoggedIn = isTokenValid();

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/user" /> : <Login />}
          />
          <Route
            path="/user"
            element={isLoggedIn ? <User /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import User from "./pages/User/User";
import { logout } from "./redux/slices/authSlice";

const App = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Handling logout in App");
    dispatch(logout());
  };

  return (
    <BrowserRouter>
      <Header onLogout={handleLogout} isLoggedIn={isLoggedIn} user={user} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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

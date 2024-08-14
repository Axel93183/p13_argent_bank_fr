import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import Signin from "./pages/SignIn/SignIn";
import Transactions from "./pages/Transactions/Transactions";
import User from "./pages/User/User";

/**
 * App component.
 * Defines the main routes and navigation for the application.
 * Utilizes `react-redux` for state management and `react-router-dom` for routing.
 *
 * @returns {JSX.Element} The rendered `BrowserRouter` with `Routes` and `Route` components.
 */

const App = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/error" element={<Page404 />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/user" /> : <Login />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/user"
          element={token ? <User /> : <Navigate to="/login" />}
        />
        <Route
          path="/transactions"
          element={token ? <Transactions /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

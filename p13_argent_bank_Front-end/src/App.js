import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import Login from "./pages/Login/Login";
import Signin from "./pages/SignIn/SignIn";

/**
 * App is a React component that represents the main application router.
 * It uses the `BrowserRouter` component from the `react-router-dom` library
 * to define the routing structure of the application.
 *
 * The router configuration includes the following routes:
 * - The root path ("/") which renders the `Home` component.
 * - A wildcard path ("*") which renders the `Page404` component for any undefined routes.
 * - A specific path ("/error") which also renders the `Page404` component for error handling.
 *
 * @returns {JSX.Element} The application routes wrapped in a BrowserRouter.
 */

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/error" element={<Page404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

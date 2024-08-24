import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../redux/slices/authSlice";

import Logo from "./../Logo/Logo";
import NavItem from "./../NavItem/NavItem";

import {
  faArrowRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

/**
 * Header component that provides navigation links and handles user authentication state.
 *
 * This component displays a navigation bar with a logo and user-related actions. If the user is logged in,
 * it shows their first name with a link to the user page and a sign-out button. If not logged in, it shows a login link.
 * The sign-out action triggers a logout and redirects the user to the login page.
 *
 * @component
 * @returns {JSX.Element} The rendered Header component with navigation and user options.
 */

const Header = ({ isLoggedIn }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header>
      <nav className="main-nav">
        <Logo />
        <div>
          {isLoggedIn && user ? (
            <div className="header-log">
              <NavItem href="/user" icon={faUserCircle} className="nav-icon">
                {user.firstName}
              </NavItem>
              <NavItem
                href="/login"
                icon={faArrowRightFromBracket}
                className="nav-icon"
                onClick={handleLogout}
              >
                Sign Out
              </NavItem>
            </div>
          ) : (
            <NavItem href="/login" icon={faUserCircle} className="nav-icon">
              Login
            </NavItem>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

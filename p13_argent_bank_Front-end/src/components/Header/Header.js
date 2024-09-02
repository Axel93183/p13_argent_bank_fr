import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/slices/authSlice";

import Logo from "./../Logo/Logo";
import NavItem from "./../NavItem/NavItem";

import {
  faArrowRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

/**
 * Header component.
 * Provides navigation links and user authentication options, including login and logout functionalities.
 *
 * This component renders a navigation bar with the Argent Bank logo and user-related navigation items. If the user is logged in,
 * it displays their first name with a link to the user page and a sign-out button. If the user is not logged in, it shows a login link.
 * The sign-out button triggers a logout action and redirects the user to the login page.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isLoggedIn - Indicates if the user is currently logged in.
 * @returns {JSX.Element} The rendered Header component with navigation and user options.
 */

const Header = ({ isLoggedIn }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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

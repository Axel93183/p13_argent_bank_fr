import React from "react";

import Logo from "./../Logo/Logo";
import NavItem from "./../NavItem/NavItem";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

/**
 * Header Component
 * @returns {JSX.Element} Header Component
 */

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Logo />
        <div>
          <NavItem href="/login" icon={faUserCircle} className="nav-icon">
            Login
          </NavItem>
        </div>
      </nav>
    </header>
  );
};

export default Header;

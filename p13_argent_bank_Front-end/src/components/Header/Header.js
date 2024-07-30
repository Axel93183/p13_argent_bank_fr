import React from "react";

import Logo from "./../Logo/Logo";
import NavItem from "./../NavItem/NavItem";

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
          <NavItem href="/login" iconClass="fa fa-user-circle">
            Login
          </NavItem>
        </div>
      </nav>
    </header>
  );
};

export default Header;

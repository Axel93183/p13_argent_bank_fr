import React from "react";
import argentBankLogo from "../../assets/logo/argentBankLogo.png";
import "./Logo.css";

/**
 * Logo component.
 * Renders the Argent Bank logo as a clickable link to the homepage.
 *
 * @returns {JSX.Element} The rendered Logo component.
 */

const Logo = () => {
  return (
    <a className="main-nav-logo" href="/">
      <img
        className="main-nav-logo-image"
        alt="Argent Bank Logo"
        src={argentBankLogo}
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
  );
};

export default Logo;

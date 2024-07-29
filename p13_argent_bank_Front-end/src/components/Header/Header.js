import argentBankLogo from "../../assets/logo/argentBankLogo.png";

import "./Header.css";

/**
 * Header Component
 * @returns {JSX.Element} Header Component
 */

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            alt="Argent Bank Logo"
            src={argentBankLogo}
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

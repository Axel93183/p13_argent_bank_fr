import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavItem.css";

const NavItem = ({ href, icon, className, children, onClick }) => {
  return (
    <a className="main-nav-item" href={href} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className={className} />
      {children}
    </a>
  );
};

export default NavItem;

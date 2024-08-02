import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavItem.css";

const NavItem = ({ href, icon, className, children }) => {
  return (
    <a className="main-nav-item" href={href}>
      <FontAwesomeIcon icon={icon} className={className} />
      {children}
    </a>
  );
};

export default NavItem;

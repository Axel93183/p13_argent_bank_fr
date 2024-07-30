import React from "react";
import "./NavItem.css";

const NavItem = ({ href, iconClass, children }) => {
  return (
    <a className="main-nav-item" href={href}>
      <i className={iconClass}></i>
      {children}
    </a>
  );
};

export default NavItem;

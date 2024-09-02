import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavItem.css";

/**
 * NavItem component.
 * Renders a navigation item with an icon and optional text.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.href - The URL the link points to.
 * @param {Object} props.icon - FontAwesome icon object to display.
 * @param {string} [props.className] - Optional class name for the icon.
 * @param {React.ReactNode} [props.children] - Optional children elements to render alongside the icon.
 * @param {Function} [props.onClick] - Optional click handler function.
 * @returns {JSX.Element} The rendered NavItem component.
 */

const NavItem = ({ href, icon, className, children, onClick }) => {
  return (
    <a className="main-nav-item" href={href} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className={className} />
      {children}
    </a>
  );
};

export default NavItem;

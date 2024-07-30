import React from "react";

import Button from "../Button/Button";

import "./AccountHeader.css";

/**
 * AccountHeader component.
 * Renders a header with a welcome message and a button to edit the name.
 * @returns {JSX.Element} AccountHeader component.
 */

const AccountHeader = () => {
  return (
    <div className="account-header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <Button text="Edit Name" className="edit-button" />
    </div>
  );
};

export default AccountHeader;

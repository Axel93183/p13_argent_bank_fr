import React from "react";

import Button from "../Button/Button";

import "./Account.css";

/**
 * Account component.
 * Displays account information including title, amount, and description, with a button to view transactions.
 * @param {Object} props - Component properties.
 * @param {string} props.title - Account title.
 * @param {string} props.amount - Account amount.
 * @param {string} props.description - Description of the account amount.
 * @returns {JSX.Element} Account component.
 */

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button text="View transactions" className="transaction-button" />
      </div>
    </section>
  );
};

export default Account;

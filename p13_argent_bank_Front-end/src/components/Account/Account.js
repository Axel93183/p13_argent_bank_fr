import React from "react";
import Button from "../Button/Button";
import "./Account.css";

const Account = ({
  title,
  amount,
  description,
  showButton = true,
  className = "account",
  onViewTransactions,
}) => {
  return (
    <section className={className}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      {showButton && (
        <div className="account-content-wrapper cta">
          <Button
            text="View transactions"
            className="transaction-button"
            onClick={onViewTransactions}
          />
        </div>
      )}
    </section>
  );
};

export default Account;

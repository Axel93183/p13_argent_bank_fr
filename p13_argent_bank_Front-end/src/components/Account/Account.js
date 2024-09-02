import React from "react";
import Button from "../Button/Button";
import "./Account.css";

/**
 * Account component.
 * Displays an account section with details including title, amount, and description.
 *
 * This component optionally includes a button to view transactions. The button's visibility and functionality are controlled via props.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the account section.
 * @param {string} props.amount - The amount displayed in the account section.
 * @param {string} props.description - A description of the account.
 * @param {boolean} [props.showButton=true] - Whether to show the view transactions button.
 * @param {string} [props.className="account"] - Optional CSS class name for custom styling.
 * @param {Function} [props.onViewTransactions] - Callback function to execute when the view transactions button is clicked.
 *
 * @returns {JSX.Element} The rendered Account component with optional button and content.
 */

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

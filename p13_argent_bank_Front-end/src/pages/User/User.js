import React from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../components/Account/Account";
import AccountHeader from "../../components/AccountHeader/AccountHeader";
import "./User.css";

/**
 * User component displaying the user's account information and handling navigation.
 *
 * This component shows a list of the user's accounts with their balances and provides navigation to the transactions page.
 * It uses the `useNavigate` hook from `react-router-dom` to handle route changes.
 *
 * @component
 * @returns {JSX.Element} The rendered `User` component with account details and navigation functionality.
 *
 * @example
 * <User />
 */

const User = () => {
  const navigate = useNavigate();

   /**
   * Handles navigation to the transactions page with the selected account information.
   *
   * @param {Object} account - The account object containing details to be passed to the transactions page.
   * @param {string} account.title - The title of the account.
   * @param {string} account.amount - The current balance of the account.
   * @param {string} account.description - A description of the account balance.
   */
    const handleViewTransactions = (account) => {
    navigate("/transactions", { state: { account } });
  };

  return (
    <div className="user-container">
      <main className="main bg-dark">
        <AccountHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          onViewTransactions={() =>
            handleViewTransactions({
              title: "Argent Bank Checking (x8349)",
              amount: "$2,082.79",
              description: "Available Balance",
            })
          }
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
          onViewTransactions={() =>
            handleViewTransactions({
              title: "Argent Bank Savings (x6712)",
              amount: "$10,928.42",
              description: "Available Balance",
            })
          }
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
          onViewTransactions={() =>
            handleViewTransactions({
              title: "Argent Bank Credit Card (x8349)",
              amount: "$184.30",
              description: "Current Balance",
            })
          }
        />
      </main>
    </div>
  );
};

export default User;

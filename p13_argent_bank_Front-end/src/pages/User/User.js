import React from "react";

import Account from "../../components/Account/Account";
import AccountHeader from "../../components/AccountHeader/AccountHeader";

import "./User.css";

/**
 * User page component that displays account information and user details.
 *
 * This component renders the user profile page, including an account header and a list of accounts with their balances.
 * It uses `AccountHeader` to display a personalized greeting and `Account` components to show different types of accounts with their respective balances.
 *
 * @component
 * @returns {JSX.Element} The rendered User page with account details and user header.
 */

const User = () => {
  return (
    <div className="user-container">
      <main className="main bg-dark">
        <AccountHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
};

export default User;

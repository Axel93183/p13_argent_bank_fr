import React from "react";
import Account from "../../components/Account/Account";
import AccountHeader from "../../components/AccountHeader/AccountHeader";

import { useSelector } from "react-redux";
import "./User.css";

const User = () => {
  const { firstName, lastName } = useSelector((state) => state.user.user);

  return (
    <div className="user-container">
      <main className="main bg-dark">
        <AccountHeader firstName={firstName} lastName={lastName} />
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

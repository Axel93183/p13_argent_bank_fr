import React from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../components/Account/Account";
import AccountHeader from "../../components/AccountHeader/AccountHeader";
import "./User.css";

const User = () => {
  const navigate = useNavigate();

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

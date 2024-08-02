import React from "react";

import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import CollapseTransactions from "../../components/Transactions/CollapseTransactions/CollapseTransactions";
import Header from "./../../components/Header/Header";

import "./Transactions.css";

/**
 * Transactions component.
 * Renders the transactions page with header, main content, and footer.
 * Displays an account summary without the "View transactions" button.
 * @returns {JSX.Element} Transactions component.
 */

const Transactions = () => {
  return (
    <div className="transactions-container">
      <Header />
      <main className="main bg-dark">
        <h2 className="sr-only">Transactions</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          className="transactions-page-header"
          showButton={false}
        />
        <section className="transactions-array">
          <CollapseTransactions
            date="date"
            description="description"
            amount="amount"
            balance="balance"
          />
          <CollapseTransactions
            date="date"
            description="description"
            amount="amount"
            balance="balance"
          />
          <CollapseTransactions
            date="date"
            description="description"
            amount="amount"
            balance="balance"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;

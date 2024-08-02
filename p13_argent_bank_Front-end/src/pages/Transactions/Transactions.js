import React from "react";

import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
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
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;

import React from "react";

import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import CollapseContent from "../../components/Transactions/CollapseContent/CollapseContent";
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
            date="01/01/2023"
            description="Description 1"
            amount="$50.00"
            balance="$2,032.79"
            content={<CollapseContent category="" notes="" />}
          />
          <CollapseTransactions
            date="02/01/2023"
            description="Description 2"
            amount="$30.00"
            balance="$2,002.79"
          />
          <CollapseTransactions
            date="03/01/2023"
            description="Description 3"
            amount="$20.00"
            balance="$1,982.79"
            content={<CollapseContent category="Travel" notes="Another note" />}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;

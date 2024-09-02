import React from "react";
import { useLocation } from "react-router-dom";
import Account from "../../components/Account/Account";
import CollapseContent from "../../components/Transactions/CollapseContent/CollapseContent";
import CollapseTransactions from "../../components/Transactions/CollapseTransactions/CollapseTransactions";
import "./Transactions.css";

const Transactions = () => {
  const location = useLocation();
  const { account } = location.state || {};

  if (!account) {
    return <div>No account selected</div>;
  }

  return (
    <div className="transactions-container">
      <main className="main bg-dark">
        <h2 className="sr-only">Transactions</h2>
        <Account
          title={account.title}
          amount={account.amount}
          description={account.description}
          className="transactions-page-header"
          showButton={false}
        />
        <section className="transactions-array">
          <CollapseTransactions
            date="03/01/2023"
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
            content={<CollapseContent category="" notes="" />}
          />
          <CollapseTransactions
            date="01/01/2023"
            description="Description 3"
            amount="$20.00"
            balance="$1,982.79"
            content={<CollapseContent category="" notes="" />}
          />
        </section>
      </main>
    </div>
  );
};

export default Transactions;

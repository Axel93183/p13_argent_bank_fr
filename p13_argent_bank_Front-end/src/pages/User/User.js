import React from "react";
import Account from "../../components/Account/Account";
import AccountHeader from "../../components/AccountHeader/AccountHeader";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

/**
 * User component.
 * Renders the user profile page with a header, profile header, account details, and footer.
 * @returns {JSX.Element} User component.
 */

const User = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default User;

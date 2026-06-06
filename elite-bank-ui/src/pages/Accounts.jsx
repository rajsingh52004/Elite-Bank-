import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

import "../styles/Accounts.css";

function Accounts() {

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {

    try {

      const response = await API.get("/accounts");

      setAccounts(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="accounts-page">

        <h1 className="page-heading">
          My Accounts
        </h1>

        <div className="accounts-grid">

          {accounts.map((account) => (

            <div
              className="account-card"
              key={account.id}
            >

              <div className="account-top">

                <span className="account-type">
                  Savings Account
                </span>

                <span className="status">
                  Active
                </span>

              </div>

              <h3>
                {account.accountNumber}
              </h3>

              <h1>
                ₹ {account.balance}
              </h1>

              <div className="account-footer">

                <span>
                  ID : {account.id}
                </span>

                <button>
                  View
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Accounts;
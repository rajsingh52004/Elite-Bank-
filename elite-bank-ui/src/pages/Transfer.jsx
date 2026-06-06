import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

import "../styles/Transfer.css";

function Transfer() {

  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/accounts/transfer",
        {
          fromAccount,
          toAccount,
          amount
        }
      );

      alert("Transfer Successful");

      setFromAccount("");
      setToAccount("");
      setAmount("");

    } catch (error) {

      console.log(error);

      alert("Transfer Failed");
    }
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="transfer-page">

        <div className="transfer-card">

          <h1>🔄 Transfer Money</h1>

          <form onSubmit={handleTransfer}>

            <label>From Account</label>

            <input
              type="text"
              placeholder="ACC1001"
              value={fromAccount}
              onChange={(e) =>
                setFromAccount(e.target.value)
              }
            />

            <label>To Account</label>

            <input
              type="text"
              placeholder="ACC1002"
              value={toAccount}
              onChange={(e) =>
                setToAccount(e.target.value)
              }
            />

            <label>Amount</label>

            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
            />

            <button type="submit">
              Transfer Money
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Transfer;
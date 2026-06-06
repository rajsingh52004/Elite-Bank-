import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

import "../styles/Withdraw.css";

function Withdraw() {

  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = async (e) => {

    e.preventDefault();

    try {

      await API.put(
        `/accounts/withdraw/${id}?amount=${amount}`
      );

      alert("Withdraw Successful");

      setId("");
      setAmount("");

    } catch (error) {

      console.log(error);

      alert("Withdraw Failed");
    }
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="withdraw-page">

        <div className="withdraw-card">

          <h1>💸 Withdraw Money</h1>

          <form onSubmit={handleWithdraw}>

            <label>Account ID</label>

            <input
              type="number"
              placeholder="Enter Account ID"
              value={id}
              onChange={(e) =>
                setId(e.target.value)
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
              Withdraw Money
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Withdraw;
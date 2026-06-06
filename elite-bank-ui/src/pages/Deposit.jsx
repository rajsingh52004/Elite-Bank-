import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

import "../styles/Deposit.css";

function Deposit() {

  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");

  const handleDeposit = async (e) => {

    e.preventDefault();

    try {

      await API.put(
       `/accounts/deposit/${id}?amount=${amount}`
      );

      alert("Deposit Successful");

      setId("");
      setAmount("");

    } catch (error) {

      console.log(error);

      alert("Deposit Failed");
    }
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="deposit-page">

        <div className="deposit-card">

          <h1>💰 Deposit Money</h1>

          <form onSubmit={handleDeposit}>

            <label>
              Account ID
            </label>

            <input
              type="number"
              placeholder="Enter Account ID"
              value={id}
              onChange={(e) =>
                setId(e.target.value)
              }
            />

            <label>
              Amount
            </label>

            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
            />

            <button type="submit">
              Deposit Money
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Deposit;
import "../styles/Sidebar.css";

import { NavLink } from "react-router-dom";


import {
  FaHome,
  FaUniversity,
  FaMoneyBillWave,
  FaArrowCircleDown,
  FaExchangeAlt,
  FaChartPie,
  FaCog
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo-section">

        <div className="logo-circle">
          <img src="/favicon.svg" alt="Elite Bank Logo" />
        </div>

        <div>
          <h2>Elite Bank</h2>
          <p>Digital Banking</p>
        </div>

      </div>

      <div className="menu">

        <NavLink to="/" className="menu-link">
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink to="/accounts" className="menu-link">
          <FaUniversity />
          Accounts
        </NavLink>

        <NavLink to="/deposit" className="menu-link">
          <FaMoneyBillWave />
          Deposit
        </NavLink>

        <NavLink to="/withdraw" className="menu-link">
          <FaArrowCircleDown />
          Withdraw
        </NavLink>

        <NavLink to="/transfer" className="menu-link">
          <FaExchangeAlt />
          Transfer
        </NavLink>

        <NavLink to="/analytics" className="menu-link">
          <FaChartPie />
          Analytics
        </NavLink>

      </div>

      <div className="bottom-section">

        <div className="premium-box">

          <h4>Premium Plan</h4>

          <p>Unlimited Transfers</p>

        </div>

        <NavLink to="/settings" className="menu-link">
          <FaCog />
          Settings
        </NavLink>

      </div>

    </div>
  );
}

export default Sidebar;
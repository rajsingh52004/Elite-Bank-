import "../styles/Navbar.css";
import {
  FaBell,
  FaSearch,
  FaMoon,
  FaSun
} from "react-icons/fa";

import { useState } from "react";

function Navbar() {

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  const toggleTheme = () => {

    const body = document.body;

    if (darkMode) {
      body.style.background = "#f8fafc";
      body.style.color = "#111827";
    } else {
      body.style.background = "#020617";
      body.style.color = "#ffffff";
    }

    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">

      <div className="navbar-title">
        <h2>Elite Bank</h2>
      </div>

      <div className="search-bar">
        <FaSearch />
        <input
          type="text"
          placeholder="Search transactions..."
        />
      </div>

      <div className="navbar-right">

        <div
          className="nav-icon"
          onClick={toggleTheme}
        >
          {
            darkMode
              ? <FaMoon />
              : <FaSun />
          }
        </div>

        <div
          className="nav-icon"
          onClick={() =>
            setShowNotifications(
              !showNotifications
            )
          }
        >
          <FaBell />

          <span className="badge">
            3
          </span>
        </div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt=""
          />

          <div>
            <h4>Raj Singh</h4>
            <p>Premium Customer</p>
          </div>
        </div>

      </div>

      {
        showNotifications && (

          <div className="notification-box">

            <h4>Notifications</h4>

            <div className="notification-item">
              ✅ Deposit Successful
            </div>

            <div className="notification-item">
              ✅ Transfer Completed
            </div>

            <div className="notification-item">
              💰 Salary Credited
            </div>

          </div>

        )
      }

    </div>
  );
}

export default Navbar;
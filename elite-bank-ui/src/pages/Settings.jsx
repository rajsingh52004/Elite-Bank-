import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/Settings.css";

function Settings() {

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="settings-page">

        <h1>⚙️ Settings</h1>

        <div className="settings-grid">

          <div className="setting-card">

            <h3>Profile</h3>

            <div className="setting-item">
              <span>Name</span>
              <span>Raj Singh</span>
            </div>

            <div className="setting-item">
              <span>Plan</span>
              <span>Premium</span>
            </div>

          </div>

          <div className="setting-card">

            <h3>Preferences</h3>

            <div className="setting-item">
              <span>Theme</span>
              <span>Dark</span>
            </div>

            <div className="setting-item">
              <span>Notifications</span>
              <span>Enabled</span>
            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Settings;
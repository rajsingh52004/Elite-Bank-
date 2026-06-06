import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/accounts"
        element={<Accounts />}
      />

      <Route
        path="/deposit"
        element={<Deposit />}
      />

      <Route
        path="/withdraw"
        element={<Withdraw />}
      />

      <Route
        path="/transfer"
        element={<Transfer />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />

    </Routes>
  );
}

export default App;
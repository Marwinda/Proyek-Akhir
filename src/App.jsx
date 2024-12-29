import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AccountsPage from "./pages/AccountsPage";
import TransactionsPage from "./pages/TransactionsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />
          }
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <DashboardPage /> : <Navigate to="/" />}
        />
        <Route
          path="/accounts"
          element={isLoggedIn ? <AccountsPage /> : <Navigate to="/" />}
        />
        <Route
          path="/transactions"
          element={isLoggedIn ? <TransactionsPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
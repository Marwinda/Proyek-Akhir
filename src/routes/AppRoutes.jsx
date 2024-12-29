import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import TransactionsPage from "../pages/TransactionsPage";
import LoginPage from "../pages/LoginPage";
import AccountsPage from "../pages/AccountsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/accounts" element={<AccountsPage />} />
    </Routes>
  );
};

export default AppRoutes;
import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Chart from "./components/Chart";
import TransactionTable from "./components/TransactionTable";

function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Dashboard />
        <Chart />
        <TransactionTable />
      </main>
    </div>
  );
}

export default App;

// Komponen utama dashboard //

import React from 'react';
import Chart from './Chart';
import TransactionTable from './TransactionTable';
import Accounts from './Accounts';

const Dashboard = () => {
  return (
    <main className="p-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Your Total Balance</h2>
          <p className="text-3xl font-semibold">$100,020.00</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Total Income</h2>
          <p className="text-3xl font-semibold">$150,010.00</p>
        </div>
      </section>
      <Chart />
      <TransactionTable />
      <Accounts />
    </main>
  );
};

export default Dashboard;

import React from "react";

const transactions = [
  { date: "2024-01-05", name: "Online Store", status: "Completed", source: "Credit Card", amount: "$150" },
  { date: "2024-01-12", name: "Grocery Store", status: "Rejected", source: "Debit Card", amount: "$75" },
  { date: "2024-01-20", name: "Utility Bill", status: "Pending", source: "Bank Transfer", amount: "$100" },
];

function TransactionTable() {
  return (
    <section className="my-6">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Source</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => (
            <tr key={idx}>
              <td className="border border-gray-300 px-4 py-2">{tx.date}</td>
              <td className="border border-gray-300 px-4 py-2">{tx.name}</td>
              <td className="border border-gray-300 px-4 py-2">{tx.status}</td>
              <td className="border border-gray-300 px-4 py-2">{tx.source}</td>
              <td className="border border-gray-300 px-4 py-2">{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TransactionTable;

// Komponen untuk grafik //

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", Income: 4000, Expense: 2400 },
  { name: "Feb", Income: 3000, Expense: 1398 },
  { name: "Mar", Income: 2000, Expense: 9800 },
  { name: "Apr", Income: 2780, Expense: 3908 },
];

function Chart() {
  return (
    <section className="my-6">
      <h2 className="text-xl font-bold mb-4">Transaction Activity</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Income" stroke="#8884d8" />
          <Line type="monotone" dataKey="Expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Chart;

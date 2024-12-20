// Header aplikasi //

import React from "react";

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My-Finance</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Dashboard</a></li>
          <li><a href="#" className="hover:underline">Transactions</a></li>
          <li><a href="#" className="hover:underline">Accounts</a></li>
          <li><a href="#" className="hover:underline">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

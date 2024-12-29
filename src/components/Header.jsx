import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Finance Tracker</h1>
      <nav>
        <Link to="/dashboard" className="mr-4 hover:underline">
          Dashboard
        </Link>
        <Link to="/transactions" className="mr-4 hover:underline">
          Transactions
        </Link>
        <Link to="/accounts" className="hover:underline">
          Accounts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
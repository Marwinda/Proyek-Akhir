import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-700 text-white h-screen p-4">
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/accounts">Accounts</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
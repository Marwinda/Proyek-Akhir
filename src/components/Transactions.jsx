import PropTypes from "prop-types";

const Transactions = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Transactions;
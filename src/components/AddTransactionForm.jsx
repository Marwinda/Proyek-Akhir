import PropTypes from "prop-types";

const AddTransactionForm = ({ onAddTransaction }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTransaction = Object.fromEntries(formData.entries());
    onAddTransaction(newTransaction);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Transaction Name" required />
      <input type="number" name="amount" placeholder="Amount" required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

AddTransactionForm.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
};

export default AddTransactionForm;
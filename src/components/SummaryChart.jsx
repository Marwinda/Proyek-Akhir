const Summary = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total Balance</h2>
          <p className="text-2xl">$100,000.00</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Income</h2>
          <p className="text-2xl">$150,000.00</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Expenses</h2>
          <p className="text-2xl">$50,000.00</p>
        </div>
      </div>
    );
  };
  
  export default Summary;
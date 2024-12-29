const Accounts = () => {
    const accounts = [
      { name: "Crypto", balance: 85345 },
      { name: "Visa Debit Card", balance: 15345 },
      { name: "MasterCard", balance: 55345 },
      { name: "PayPal", balance: 35345 },
    ];
  
    return (
      <div>
        <h2 className="text-lg font-bold">Accounts</h2>
        <ul>
          {accounts.map((account, index) => (
            <li key={index} className="flex justify-between p-2 bg-gray-800 text-white">
              <span>{account.name}</span>
              <span>${account.balance}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Accounts;
  
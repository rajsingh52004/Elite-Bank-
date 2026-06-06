function RecentTransactions() {

  const transactions = [
    {
      type: "Deposit",
      amount: "₹2000",
      status: "Success"
    },
    {
      type: "Withdraw",
      amount: "₹500",
      status: "Success"
    },
    {
      type: "Transfer",
      amount: "₹1000",
      status: "Success"
    }
  ];

  return (
    <div className="transactions-card">

      <h2>Recent Transactions</h2>

      <table>

        <thead>

          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {transactions.map((t, index) => (

            <tr key={index}>
              <td>{t.type}</td>
              <td>{t.amount}</td>
              <td>{t.status}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentTransactions;
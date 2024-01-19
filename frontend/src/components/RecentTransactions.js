// RecentTransactions.js
import React from "react";

function RecentTransactions() {
  const transactions = [
    { id: 1, type: "Income", amount: 500, date: "2023-01-10" },
    { id: 2, type: "Expense", amount: 75, date: "2023-01-12" },
    { id: 3, type: "Income", amount: 300, date: "2023-01-14" },
    { id: 1, type: "Income", amount: 500, date: "2023-01-10" },
    { id: 2, type: "Expense", amount: 75, date: "2023-01-12" },
    { id: 3, type: "Income", amount: 300, date: "2023-01-14" },
    { id: 1, type: "Income", amount: 500, date: "2023-01-10" },
    { id: 2, type: "Expense", amount: 75, date: "2023-01-12" },
    { id: 3, type: "Income", amount: 300, date: "2023-01-14" },
    { id: 1, type: "Income", amount: 500, date: "2023-01-10" },
    { id: 2, type: "Expense", amount: 75, date: "2023-01-12" },
    { id: 3, type: "Income", amount: 300, date: "2023-01-14" },
    { id: 1, type: "Income", amount: 500, date: "2023-01-10" },
    { id: 2, type: "Expense", amount: 75, date: "2023-01-12" },
    { id: 3, type: "Income", amount: 300, date: "2023-01-14" },
    { id: 1, type: "Income", amount: 500, date: "2023-01-10" },
    { id: 2, type: "Expense", amount: 75, date: "2023-01-12" },
    { id: 3, type: "Income", amount: 300, date: "2023-01-14" },
    { id: 1, type: "Income", amount: 500, date: "2023-01-10" },
    { id: 2, type: "Expense", amount: 75, date: "2023-01-12" },
    { id: 3, type: "Income", amount: 300, date: "2023-01-14" },
    { id: 1, type: "Income", amount: 500, date: "2023-01-10" },
    { id: 2, type: "Expense", amount: 75, date: "2023-01-12" },
    { id: 3, type: "Income", amount: 300, date: "2023-01-14" },
    // Add more transactions as needed
  ];

  return (
    <div className="recent-transactions bg-white shadow-md rounded-lg p-4 max-h-screen overflow-auto">
      <h3 className="font-semibold text-lg text-gray-800">
        Recent Transactions
      </h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center border-b border-gray-200 py-2"
          >
            <div className="flex-1 flex justify start">
              <span>{transaction.type}</span>
            </div>
            <div className="flex-1 flex justify start">
              <span>{transaction.date}</span>
            </div>
            <div className="flex-1 flex justify-end">
              <span
                className={`${
                  transaction.type === "Income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                ${transaction.amount}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;

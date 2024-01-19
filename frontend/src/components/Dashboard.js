// Dashboard.js
import React from "react";
import CurrentBalance from "./CurrentBalance";
import RecentTransactions from "./RecentTransactions";

function Dashboard() {
  return (
    <section className="dashboard my-8">
      <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-4">
        <CurrentBalance />
        <RecentTransactions />
        {/* Include other dashboard components like RecentTransactions and ExpenseBreakdown here */}
      </div>
    </section>
  );
}

export default Dashboard;

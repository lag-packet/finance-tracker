import React from 'react';

function CurrentBalance () {
  // Assume balance is fetched or calculated
  const balance = 1000;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="font-semibold text-lg text-gray-800">Current Balance</h3>
      <p className="text-gray-600">${balance}</p>
    </div>
  );
}

export default CurrentBalance;

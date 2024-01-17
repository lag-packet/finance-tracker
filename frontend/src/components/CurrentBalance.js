import React, { useState, useEffect } from "react";

function CurrentBalance() {
  const [balance, setBalance] = useState(() => {
    // read balance from local storage, default 0.
    const savedBal = localStorage.getItem("balance");
    const paresedBal = parseFloat(savedBal);
    return isNaN(paresedBal) ? 0 : paresedBal;
  });
  const [isEditing, setIsEditing] = useState(false);

  const updateLocalStorage = (newBalance) => {
    localStorage.setItem("balance", newBalance);
  };

  // update local storage on balance change.
  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  const handleBlur = (e) => {
    //update local storage here.
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      //update local storage here
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    const newBalance = parseFloat(e.target.value);
    if (!isNaN(newBalance)) {
      setBalance(newBalance);
    }
  }

  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(balance);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="font-semibold text-lg text-gray-800">Current Balance</h3>
      {isEditing ? (
        <input
          type="number"
          value={balance}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          className="text-gray-600 p-1 border-2 border-gray-300 rounded w-full"
          autoFocus
          aria-label="Edit Balance"
        />
      ) : (
        <p
          className="text-gray-600"
          onClick={() => setIsEditing(true)}
          aria-label="Current Balance"
        >
          {formattedBalance}
        </p>
      )}
    </div>
  );
}

export default CurrentBalance;

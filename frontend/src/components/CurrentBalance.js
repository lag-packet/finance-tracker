import React, { useState } from "react";

function CurrentBalance() {
  const [balance, setBalance] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = (e) => {
    //update local storage here.
    setIsEditing(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      //update local storage here
      setIsEditing(false);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="font-semibold text-lg text-gray-800">Current Balance</h3>
      {isEditing ? (
        <input
          type="number"
          value={balance}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={(e) => setBalance(e.target.value)}
          className="text-gray-600 p-1 border-2 border-gray-300 rounded"
          autoFocus
        />
      ) : (
        <p className="text-gray-600" onClick={() => setIsEditing(true)}>
          ${balance}
        </p>
      )}
    </div>
  );
}

export default CurrentBalance;

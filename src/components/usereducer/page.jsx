import React, { useReducer } from "react";

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return state - action.payload; // Corrected: Ensure action.payload is a number
    case "DEPOSIT":
      return state + action.payload; // Corrected: Ensure action.payload is a number
    default:
      return state;
  }
};

const Page = () => {
  const [state, dispatch] = useReducer(transactionReducer, 1000);

  const withdraw = (amount) => {
    dispatch({ type: "WITHDRAW", payload: amount });
  };

  const deposit = (amount) => {
    dispatch({ type: "DEPOSIT", payload: amount });
  };

  return (
    <div>
      <h3>{`Balance is: ${state}`}</h3>
      <button onClick={() => withdraw(500)}>Withdraw</button>{" "}
      {/* Corrected: Typo in 'withdraw' */}
      <button onClick={() => deposit(500)}>Deposit</button>
    </div>
  );
};

export default Page;

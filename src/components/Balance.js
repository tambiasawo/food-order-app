import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //0 here is the initial acc aka total
  console.log(total);
  return (
    <>
      <center>
        <h4>Net Balance</h4>
        <h1>${total}</h1>
      </center>
    </>
  );
};

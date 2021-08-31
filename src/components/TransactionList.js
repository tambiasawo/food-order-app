import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Past Transactions</h3>
      <ul id="list" className="list">
        {transactions.map((trans) => (
          <Transaction key={trans.id} eachtrans={trans} />
        ))}
      </ul>
    </>
  );
};

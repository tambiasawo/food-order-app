import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ eachtrans }) => {
  const sign = eachtrans.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={eachtrans.amount < 0 ? "minus" : "plus"}>
      {eachtrans.text}{" "}
      <span>
        {sign}${eachtrans.amount}
      </span>
      <button
        onClick={() => deleteTransaction(eachtrans.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

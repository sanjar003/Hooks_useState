import React, { useState } from "react";
import "./Expenses.css";
import { ExpensesCard } from "./ExpensesCard";
import { Button } from "../Ui/Button";

export function Expenses() {
  const [ShowForm, setShowForm] = useState(false);
  function OpenClickHandle() {
    setShowForm((prev) => !prev);
  }
  return (
    <div className="containerExpenses">
      {ShowForm ? (
        <ExpensesCard onClick={OpenClickHandle} />
      ) : (
        <Button onClick={OpenClickHandle}>Далее</Button>
      )}
    </div>
  );
}

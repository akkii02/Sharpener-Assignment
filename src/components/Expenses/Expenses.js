import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // console.log(filteredYear);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList item={filteredExpense}/>
    </Card>
  );
};
export default Expenses;

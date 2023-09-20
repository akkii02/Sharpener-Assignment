import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // console.log(filteredYear);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  let  singleExpenseContent = null;
  if(filteredExpense.length === 1){
    singleExpenseContent = <p>Only single Expense here. Please add more...</p>;
  }
  let expenseContent = <p>No Expense Found</p>;
  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.LocationOfExpenditure}
      />
    ));
  } 

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
      {singleExpenseContent}
    </Card>
  );
};
export default Expenses;

import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
            <React.Fragment key={expense.id}>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.LocationOfExpenditure}
        />
        {props.item.length ===1 && <h2 className="expenses-list__fallback">Only single Expense here. Please add more..</h2>}
        </React.Fragment>
      ))}
      
    </ul>
  );
};

export default ExpensesList;

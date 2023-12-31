import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
const initialExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "Mumbai",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      LocationOfExpenditure: "Akola",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "Goa",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "Pune",
    },
    {
      id: "e5",
      title: "New Laptop ",
      amount: 4000,
      date: new Date(2022, 5, 12),
      LocationOfExpenditure: "Pune",
    },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }

  return (
   <div>
    <NewExpense onAddExpense={addExpenseHandler} />     
    <Expenses expenses={expenses}/>
   </div>
  );

  /*React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's Get Started"),
    React.createElement(Expenses, { expenses: expenses })
  );*/

}

export default App;

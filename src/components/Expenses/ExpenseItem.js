import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [amount,changeAmount] = useState(props.amount);

  const clickHandler = ()=>{
    changeAmount('100$');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={amount}
        location={props.location}
      />
      <button className="deletebtn" onClick={clickHandler}>Delete</button>
    </Card>
  );
}
export default ExpenseItem;

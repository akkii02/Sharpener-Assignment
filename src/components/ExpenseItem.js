
import './ExpenseItem.css';
function ExpenseItem(props) {
  
  const expenseDate = new Date(2023 , 9 , 6);
  const expenseTitle = "Buy Book";
  const expenseAmount= 200;
  const LocationOfExpenditure = "Akola";
  return (
    <div className='expense-item'>
      <div className=''>{props.date.toISOString()}</div>
      <div className='expense-item__description '>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        <div>{props.location}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

import './ExpenseItem.css';
function ExpenseItem() {
  
  const expenseDate = new Date(2023 , 9 , 6);
  const expenseTitle = "Buy Book";
  const expenseAmount= 200;
  const LocationOfExpenditure = "Akola";
  return (
    <div className='expense-item'>
      <div className=''>{expenseDate.toUTCString()}</div>
      <div className='expense-item__description '>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
        <div>{LocationOfExpenditure}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

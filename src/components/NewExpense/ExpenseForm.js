import { useState } from 'react'
import Card from '../UI/Card';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

   
    const [addExpenseClicked, setAddExpenseClicked ] = useState(false)

    const addExpenseClickedHandler = () => {
        setAddExpenseClicked(true);
    }

    const cancelClickHandler = () => {
        setAddExpenseClicked(false);
    }
    
    if (!addExpenseClicked)
    return <Card className="banner">
        <button onClick={addExpenseClickedHandler}>Add a new expense</button>
    </Card>
    
    if (addExpenseClicked)
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='click' onClick={cancelClickHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm
/*import { useState } from 'react';*/

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

/* More for Set title later*/

function ExpenseItem(props) {

   const title = props.title;

/*    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle('Updated!')
        console.log(title)
    }*/

    return (
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item_description">
            <h2>{title}</h2>
            <div className="expense-item_price">{props.amount}</div>
          </div>
          {/*<button onClick={clickHandler}>Change Title</button>*/}
        </Card>
      </li>
    );
}

export default ExpenseItem;
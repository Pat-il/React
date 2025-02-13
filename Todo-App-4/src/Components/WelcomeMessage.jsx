import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store'

function WelcomeMessage() {

  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div>
      {todoItems.length === 0 && <h3>Enjoy Your Day</h3>}
    </div>
  )
}

export default WelcomeMessage

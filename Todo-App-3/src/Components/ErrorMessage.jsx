import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-item-store'

function ErrorMessage() {

  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div>
      {todoItems.length === 0 && <h3>Enjoy Your Day</h3>}
    </div>
  )
}

export default ErrorMessage

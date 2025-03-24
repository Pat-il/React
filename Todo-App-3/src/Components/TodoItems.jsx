import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoItemsContext } from '../store/todo-item-store'

function TodoItems() {

  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div className="item-container">
      {todoItems.map((item) => <TodoItem  key={item.todoName} todoName={item.todoName} dueDate={item.dueDate}/>)}
    </div>
  )
}

export default TodoItems

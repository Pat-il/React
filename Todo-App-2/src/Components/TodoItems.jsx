import React from 'react'
import TodoItem from './TodoItem'

function TodoItems({todoItems, onDeleteClick}) {

  return (
    <div className="item-container">
      {todoItems.map((item) => <TodoItem onDeleteClick={onDeleteClick} key={item.todoName} todoName={item.todoName} dueDate={item.dueDate}/>)}
    </div>
  )
}

export default TodoItems

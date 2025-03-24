import React from 'react'
import TodoItem from './TodoItem'

function TodoItems({todoItems}) {
  return (
    <div className="item-container">
      {todoItems.map((item) => <TodoItem todoName={item.todoName} dueDate={item.dueDate}/>)}
    </div>
  )
}

export default TodoItems

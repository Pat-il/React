import React from 'react'
import { MdDelete } from "react-icons/md";
function TodoItem({todoName, todoDate, onDeleteClick}) {

  return (
    <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className="col-2">
          <button type="button" onClick={() => onDeleteClick(todoName)} className="btn btn-danger kg-button"><MdDelete /></button>
          </div>
        </div>
    </div>
  )
}

export default TodoItem

import React from 'react'

function TodoItem({todoName, dueDate}) {

  return (
    <div className="row kg-row">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {dueDate}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
  )
}

export default TodoItem

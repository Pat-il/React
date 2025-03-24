import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

function TodoItem({ todoName, dueDate }) {

  const {deleteItem} = useContext(TodoItemsContext);

  return (
    <div className="row kg-row">
      <div className="col-6">
        {todoName}
        </div>
      <div className="col-4">
        {dueDate}
        </div>
      <div className="col-2">
        <button
          type="button"
          onClick={() => deleteItem(todoName)}
          className="btn btn-danger kg-button"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

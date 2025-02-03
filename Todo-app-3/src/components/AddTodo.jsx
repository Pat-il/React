import React from "react";
import styles from './AddTodo.module.css'
import { useState } from "react";

function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  }

  const handleAddButtonAdded = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }

  return (
    <div className="container">
      <div className={`row kg-row ${styles.input}`}>
        <div className="col-6">
          <input type="text" onChange={handleNameChange} value={todoName} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" onClick={handleAddButtonAdded} className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

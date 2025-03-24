// import React from "react";
// import { useState } from "react";
// import { VscAdd } from "react-icons/vsc";

// function AddTodo({ onNewItem }) {
//   let [todoName, setTodoName] = useState("");
//   let [dueDate, setDueDate] = useState("");

//   const handleNameChange = (event) => {
//     setTodoName(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleAddButtonClicked = () => {
//     onNewItem(todoName, dueDate);
//     setTodoName("");
//     setDueDate("");
//   };

//   return (
//     <div className="row kg-row">
//       <div className="col-6">
//         <input
//           type="text"
//           value={todoName}
//           onChange={handleNameChange}
//           placeholder="Enter todo Items here"
//         ></input>
//       </div>
//       <div className="col-4">
//         <input type="date" value={dueDate} onChange={handleDateChange} />
//       </div>
//       <div className="col-2">
//         <button
//           type="button"
//           onClick={handleAddButtonClicked}
//           className="btn btn-success kg-button"
//         >
//           <VscAdd />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddTodo;


// --------------------------------------------------------------------
//   Using Form Event Handling

// import React from "react";
// import { useState } from "react";
// import { VscAdd } from "react-icons/vsc";

// function AddTodo({ onNewItem }) {
//   let [todoName, setTodoName] = useState("");
//   let [dueDate, setDueDate] = useState("");

//   const handleNameChange = (event) => {
//     setTodoName(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleAddButtonClicked = (event) => {
//     event.preventDefault();
//     onNewItem(todoName, dueDate);
//     setTodoName("");
//     setDueDate("");
//   };

//   return (
//     <form className="row kg-row"
//     onSubmit={handleAddButtonClicked}>
//       <div className="col-6">
//         <input
//           type="text"
//           value={todoName}
//           onChange={handleNameChange}
//           placeholder="Enter todo Items here"
//         ></input>
//       </div>
//       <div className="col-4">
//         <input type="date" value={dueDate} onChange={handleDateChange} />
//       </div>
//       <div className="col-2">
//         <button
//           type="submit"
//           className="btn btn-success kg-button"
//         >
//           <VscAdd />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default AddTodo;


// ---------------------------------------------------------------

// useRef() 


import React from "react";
import { useRef } from "react";
import { VscAdd } from "react-icons/vsc";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <form className="row kg-row"
    onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter todo Items here"
        ></input>
      </div>
      <div className="col-4">
        <input type="date" 
          ref={dueDateElement}  />
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success kg-button"
        >
          <VscAdd />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;

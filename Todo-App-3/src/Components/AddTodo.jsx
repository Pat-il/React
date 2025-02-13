import React from "react";
import { IoBagAdd } from "react-icons/io5";
import { useRef } from "react";

function AddTodo({ onNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input 
          ref={dueDateElement}
          type="date" />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
          >
            <IoBagAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

// --------------------------------------------------------------------------

// Using the Form how we store data

// import React from "react";
// import { IoBagAdd } from "react-icons/io5";
// import { useState } from "react";

// function AddTodo({ onNewItem }) {
//   const [todoName, setTodoName] = useState("");
//   const [todoDate, setDueDate] = useState("");

//   const handleNameChange = (event) => {
//     setTodoName(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleAddButtonClicked = (event) => {
//     console.log(event);
//     event.preventDefault();
//     onNewItem(todoName, todoDate);
//     setTodoName("");
//     setDueDate("");
//   };

//   return (
//     <div className="container text-center">
//       <form className="row kg-row"
//           onSubmit={handleAddButtonClicked}>
//         <div className="col-6">
//           <input
//             type="text"
//             onChange={handleNameChange}
//             placeholder="Enter Todo Here"
//           />
//         </div>
//         <div className="col-4">
//           <input onChange={handleDateChange} type="date" />
//         </div>
//         <div className="col-2">
//           <button
//             className="btn btn-success kg-button"
//           >
//             <IoBagAdd />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddTodo;

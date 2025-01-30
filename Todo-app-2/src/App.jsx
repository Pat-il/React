import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [
    {
      name : "Go To College", 
      dueDate : "4/10/2023"
    },
    {
      name : "Buy Milk", 
      dueDate : "4/10/2023"
    },
    {
      name : "Like This Video", 
      dueDate : "Right Now"
    }
  ]


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
      
    </center>
  );
}

export default App;

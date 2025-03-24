import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  // const initialTodoItems = [
  //   {
  //     todoName : 'Buy Milk',
  //     dueDate : '4/10/2023'
  //   }, 
  //   {
  //     todoName : 'Go To College',
  //     dueDate : '4/10/2023'
  //   }
  // ]

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, {todoName : itemName, dueDate : itemDueDate}];
      return newTodoItems;
    });
  }

  const handleDeleteItem = (itemName) => {
    const deleteItem = todoItems.filter(item => item.todoName != itemName);
    setTodoItems(deleteItem);
  }

  return (
    <center className="container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <ErrorMessage />}
      <TodoItems todoItems = {todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;

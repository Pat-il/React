import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import { TodoItemsContext } from "./store/todo-item-store";

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

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { todoName: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (itemName) => {
    const deleteItem = todoItems.filter((item) => item.todoName != itemName);
    setTodoItems(deleteItem);
  };


  return (
    <TodoItemsContext.Provider value={{todoItems : todoItems, addNewItem : addNewItem, deleteItem : deleteItem}}>
      <center className="container">
        <AppName />
        <AddTodo />
        <ErrorMessage  />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

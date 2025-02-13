import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, dueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, {name : itemName, dueDate : dueDate}];
      return newTodoItems;
    })

    /* setTodoItems((currValue) => {
    //    [...currValue, {name : itemName, dueDate : dueDate}];
    // });*/
  }

  const handleDeleteButton = (itemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItem);
  }

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo onNewItem={handleNewItem}/>
      { todoItems.length == 0  && <WelcomeMessage />}
      <TodoItems todoItems={todoItems}  onDeleteClick={handleDeleteButton}/>
    </center>
  );
}

export default App;

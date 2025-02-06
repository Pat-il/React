import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {

  const todoItems = [
    {
      name : "Buy Milk",
      dueDate : "4/10/2023"
    },
    {
      name : "Go To College",
      dueDate : "4/10/2023"
    }
  ]

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <TodoItems todoItems={todoItems}/>
    </center>
  );
}

export default App;

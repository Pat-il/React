import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [
    {
      todoName : 'Buy Milk',
      dueDate : '4/10/2023'
    }, 
    {
      todoName : 'Go To College',
      dueDate : '4/10/2023'
    }
  ]

  return (
    <center className="container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems = {todoItems}/>
    </center>
  );
}

export default App;

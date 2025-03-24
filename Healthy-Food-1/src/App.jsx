import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import AppName from "./components/AppName";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if(event.key === 'Enter')
    {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems);
    }
  }

  return (
    <Container>
      <AppName />
      <ErrorMessage foodItems={foodItems} />
      <FoodInput handleKeyDown={onKeyDown}/>
      <FoodItems foodItems={foodItems} />
    </Container>
  );
}

export default App;

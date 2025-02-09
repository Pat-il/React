import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  // let foodItems = ['Sabzi', 'Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk', 'Ghee'];
  // let foodItems = [];
  // let textToShow = "Food Items Entered By User";

  let [textToShow, setTextState] = useState("");
  let [foodItems, setFoodItems] = useState(['Salad', 'Dal', 'Green Vegetables']);

  const onKeyDown = (event) => {
    if(event.key === 'Enter')
    {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  }

  return (
    <Container>
    <h1 className="foodHeading">Healthy Foods</h1>
      <ErrorMessage foodItems={foodItems}/>
      <FoodInput handleKeyDown={onKeyDown}/>
      <p>{textToShow}</p>
      <FoodItems foodItems={foodItems}/>
    </Container>
  );
}

export default App;

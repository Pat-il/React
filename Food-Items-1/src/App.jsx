import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems}/>
    </>
  );
}

export default App;

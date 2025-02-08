import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {

  let foodItems = ['Sabzi', 'Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk', 'Ghee'];
  // let foodItems = [];

  return (
    <Container>
    <h1 className="foodHeading">Healthy Foods</h1>
      <ErrorMessage foodItems={foodItems}/>
      <FoodItems foodItems={foodItems}/>
    </Container>
  );
}

export default App;

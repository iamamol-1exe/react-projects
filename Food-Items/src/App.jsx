import Container from "./components/Container";
import Fooditems from "./components/Fooditems";
import Heading from "./components/Heading";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [Fooditem, setFoodItems] = useState([
    "apple",
    "bannana",
    "orange",
    "jackfriut",
    "Mango",
    "Dahi",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...Fooditem, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <Heading />
        <FoodInput HandleOnKeyDown={onKeyDown}></FoodInput>
        <Fooditems Fooditem={Fooditem} />
      </Container>
    </>
  );
}
export default App;

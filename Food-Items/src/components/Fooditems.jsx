import { useState } from "react";
import Items from "./Items";

const Fooditems = ({ Fooditem }) => {
  let [actveItems, setactive] = useState([]);
  let onBuyButton = (Fooditem, event) => {
    let newItems = [...actveItems, Fooditem];
    setactive(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {Fooditem.map((Fooditem) => (
          <Items
            key={Fooditem}
            FoodName={Fooditem}
            bought={actveItems.includes(Fooditem)}
            handleByButtonClicked={(event) => onBuyButton(Fooditem, event)}
          />
        ))}
      </ul>
    </>
  );
};

export default Fooditems;

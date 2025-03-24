import React from "react";
import Item from "./Item";

function FoodItems({ foodItems }) {
  return (
    <div>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item item={item} key={item}
          handleBuyButton = {() => console.log(`${item} being bought`)}></Item>
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;

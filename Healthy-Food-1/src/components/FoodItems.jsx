import React from 'react'
import Item from './Item'

function FoodItems({foodItems}) {

  // let foodItems = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk', 'Ghee'];

  return (
    <ul className="list-group">
        {foodItems.map((item) => <Item key={item} item={item}/>)}
      </ul>
  )
}

export default FoodItems

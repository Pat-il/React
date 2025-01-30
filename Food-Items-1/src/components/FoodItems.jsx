import React from 'react'
import Item from './Item';

function FoodItems({foodItems}) {


  return (
    <ul className="list-group">
        {foodItems.map(item => <Item key={item} foodItem={item}></Item>)}
        
      </ul>
  )
}

export default FoodItems

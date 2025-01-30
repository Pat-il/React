import React from 'react'
import styles from './Item.module.css'

function Item(props) {
  return (
    <li className='list-group-item kg-item'><span className={styles["kg-span"]}>{props.foodItem}</span></li>
  )
}

export default Item

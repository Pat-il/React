import React from 'react'
import styles from './FoodInput.module.css'

function FoodInput({handleKeyDown}) {

  return (
    <div>
      <input type='text'
        placeholder='Enter Food Items Here'
        className={styles.foodInput}
        onKeyDown={handleKeyDown}/>
      
    </div>
  )
}

export default FoodInput

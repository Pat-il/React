import React from 'react'
import styles from './Display.module.css'

function Display({displayValue}) {
  return (
    <div>
      <input type='text' value={displayValue} className={styles.display} readOnly></input>
    </div>
  )
}

export default Display

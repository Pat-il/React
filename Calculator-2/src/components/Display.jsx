import React from 'react'
import styles from './Display.module.css'

function Display({displayValue}) {
  return (
    <div>
      <input className={styles.display} value={displayValue} type="text" readOnly></input>
    </div>
  )
}

export default Display

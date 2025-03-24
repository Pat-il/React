import React from 'react'
import styles from './Display.module.css'

function Display() {
  return (
    <div>
      <input type='text' className={styles.display} readOnly></input>
    </div>
  )
}

export default Display

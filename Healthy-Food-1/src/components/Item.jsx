import React from 'react'
import styles from './Item.module.css'

function Item({item}) {
  return (
    <div>
      <li className={`list-group-item ${styles.kgItem}`}><span className={styles.kgSpan}>{item}</span></li>
    </div>
  )
}

export default Item

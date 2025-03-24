import React from "react";
import styles from "./Item.module.css";

function Item({ item, handleBuyButton }) {
  

  return (
    <div>
      <li className={`list-group-item ${styles.kgItem}`}> 
        <span className={styles.kgSpan}>{item}</span>
        <button
          onClick={handleBuyButton}
          className={`btn btn-info ${styles.buttons}`}
        >
          Buy
        </button>
      </li>
    </div>
  );
}

export default Item;

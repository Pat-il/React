import React from "react";
import styles from "./FoodInput.module.css";

function FoodInput({handleKeyDown}) {

  return (
    <div>
      <input
        type="text"
        className={styles.foodInput}
        placeholder="Enter Food Items Here"
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}

export default FoodInput;

import React from "react";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer() {
  let buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((item) => (
        <button className={styles.button}>{item}</button>
      ))}
    </div>
  );
}

export default ButtonsContainer;

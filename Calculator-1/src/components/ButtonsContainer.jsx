import React from "react";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer() {
  const buttonsName = [
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
    "=",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((item) => (
        <button key={item} className={styles.buttons}>{item}</button>
      ))}
    </div>
  );
}

export default ButtonsContainer;

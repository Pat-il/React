import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
        key={item.name}
          onDeleteClick={onDeleteClick}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
}

export default TodoItems;

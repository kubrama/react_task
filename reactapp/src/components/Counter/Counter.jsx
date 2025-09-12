import React from "react";
import styles from '../Card/Card.module.css'

const Counter = ({ id, count, onIncrement, onDecrement }) => {
  return (
    <div className={styles.counter}>
      <h4>Count: {count}</h4>
      <div className={styles.counterButtons}>
        <button onClick={() => onDecrement(id)}>-</button>
        <button onClick={() => onIncrement(id)}>+</button>
      </div>
    </div>
  );
};

export default Counter;

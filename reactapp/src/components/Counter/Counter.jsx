import React from "react";
import '../Card/Card.css'

const Counter = ({ id, count, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <h4>Count: {count}</h4>
      <div className="counter-buttons">
        <button onClick={() => onDecrement(id)}>-</button>
        <button onClick={() => onIncrement(id)}>+</button>
      </div>
    </div>
  );
};

export default Counter;

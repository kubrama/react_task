import React, { useState } from "react";
import "./Card.css";

export default function Card({ title, description, image }) {

  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    
      <div className="counter">
        <h4>Count: {count}</h4>
        <div className="counter-buttons">
          <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

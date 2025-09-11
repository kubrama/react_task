import React from "react";
import "./Card.css";
import Counter from "../Counter/Counter";

export default function Card({ id, title, description, image, count, onIncrement, onDecrement, showCounter }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      {showCounter && (
        <Counter
          id={id}
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
    </div>
  );
}



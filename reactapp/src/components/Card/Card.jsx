import React from "react";
import styles from"./Card.module.css";
import Counter from "../Counter/Counter";

export default function Card({ id, title, description, image, count, onIncrement, onDecrement, showCounter }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>

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



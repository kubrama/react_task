import React, { useState } from "react";
import Card from "../components/Card/Card";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";

const Shop = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Mountain bike", description: "Great for mountains", image: product1, count: 0 },
    { id: 2, title: "Road bike", description: "Fast and light", image: product2, count: 0 },
    { id: 3, title: "Folding bike", description: "Perfect for city", image: product3, count: 0 },
  ]);

  
  const handleIncrement = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, count: card.count + 1 } : card
      )
    );
  };

  const handleDecrement = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, count: Math.max(0, card.count - 1) }
          : card
      )
    );
  };

  return (
    <div>
      <h1>Shop</h1>
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            showCounter={true}   
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;



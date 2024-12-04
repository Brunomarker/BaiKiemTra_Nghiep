// GameCard.jsx
import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.imageUrl} alt={game.name} />
      <div className="game-info">
        <h3>{game.name}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default GameCard;

// GameDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { gameId } = useParams();
  // Lấy dữ liệu game từ mảng games hoặc gọi API nếu cần
  const game = {
    id: gameId,
    title: "The Witcher 3: Wild Hunt",
    image: "https://example.com/witcher3.jpg",
    description:
      "An open-world RPG that features a rich, story-driven experience.",
    price: "$49.99",
  };

  return (
    <div className="game-detail">
      <h2>{game.title}</h2>
      <img src={game.image} alt={game.title} />
      <p>{game.description}</p>
      <p>{game.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default GameDetail;

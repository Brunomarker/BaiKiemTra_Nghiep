import React, { useState, useEffect } from "react";
import "./Wishlist.css"; // Importing the CSS for styling

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage or an empty array if not found
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Handle removing an item from the wishlist
  const handleRemove = (gameId) => {
    // Filter out the item by ID
    const updatedWishlist = wishlist.filter((game) => game.id !== gameId);
    setWishlist(updatedWishlist);

    // Save updated wishlist to localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist-items">
          {wishlist.map((game) => (
            <div key={game.id} className="wishlist-item">
              <img src={game.imageUrl} alt={game.name} />
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <div className="price-actions">
                <span className="price">${game.price.toFixed(2)}</span>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(game.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GameList.css"; // Đảm bảo đã import CSS

const GameList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null); // Trạng thái lưu game được chọn
  const [showModal, setShowModal] = useState(false); // Trạng thái hiển thị modal
  const navigate = useNavigate(); // Hook để điều hướng đến trang khác

  useEffect(() => {
    // Lấy Wishlist và Cart từ localStorage khi component load
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setWishlist(savedWishlist);
    setCart(savedCart);
  }, []);

  const games = [
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      description:
        "Trò chơi hành động nhập vai với thế giới mở, bạn sẽ vào vai Geralt.",
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1672299110",
      price: 29.99, // Giá gốc
      discount: 30, // Giảm giá 30%
    },
    {
      id: 2,
      name: "Red Dead Redemption 2",
      description:
        "Đi đến miền viễn tây hoang dã trong vai Arthur Morgan, Van der Linde.",
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1672784912",
      price: 39.99, // Giá gốc
      discount: 30, // Giảm giá 30%
    },
    {
      id: 3,
      name: "Hades",
      description:
        "Trò chơi roguelike, bạn sẽ vào vai Zagreus, con trai của Hades, với đầy thử thách.",
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1670489469",
      price: 19.99, // Giá gốc
      discount: 30, // Giảm giá 30%
    },
    {
      id: 4,
      name: "Cyberpunk 2077",
      description:
        "Khám phá thế giới tương lai đầy rẫy bạo lực và công nghệ trong vai V, một lính đánh thuê.",
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1673462852",
      price: 49.99, // Giá gốc
      discount: 30, // Giảm giá 30%
    },
    {
      id: 5,
      name: "Resident Evil Village",
      description:
        "Trò chơi kinh dị, nơi Ethan Winters tìm kiếm vợ trong một ngôi làng đầy quái vật.",
      imageUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg?t=1672914749",
      price: 29.99, // Giá gốc
      discount: 30, // Giảm giá 30%
    },
  ];

  const addToWishlist = (game) => {
    const updatedWishlist = [...wishlist, game];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Lưu vào localStorage
    navigate("/wishlist"); // Điều hướng đến trang wishlist
    setShowModal(false); // Đóng modal sau khi thêm vào wishlist
  };

  const addToCart = (game) => {
    const updatedCart = [...cart, game];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Lưu vào localStorage
    navigate("/cart"); // Điều hướng đến trang giỏ hàng
    setShowModal(false); // Đóng modal sau khi thêm vào cart
  };

  const openModal = (game) => {
    setSelectedGame(game); // Lưu game được chọn
    setShowModal(true); // Mở modal
  };

  const closeModal = () => {
    setShowModal(false); // Đóng modal
    setSelectedGame(null); // Xóa game đã chọn
  };

  return (
    <div className="game-list">
      {games.map((game) => {
        // Tính giá sau khi giảm
        const discountedPrice = (
          game.price *
          (1 - game.discount / 100)
        ).toFixed(2);

        return (
          <div
            key={game.id}
            className="game-card"
            onClick={() => openModal(game)}
          >
            <img src={game.imageUrl} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.description}</p>

            {/* Hiển thị giá gốc và giá sau khi giảm */}
            <p className="game-price">
              <span className="original-price">${game.price.toFixed(2)}</span>
              <span className="discounted-price">${discountedPrice}</span>
            </p>

            {/* Hiển thị giảm giá */}
            <p className="sale-banner">Mega Sale {game.discount}% OFF</p>
          </div>
        );
      })}

      {/* Modal để chọn hành động Add to Wishlist hoặc Add to Cart */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedGame.name}</h3>
            <p>{selectedGame.description}</p>
            <div className="action-buttons">
              <button
                onClick={() => addToWishlist(selectedGame)}
                className="add-to-wishlist-btn"
              >
                Add to Wishlist
              </button>
              <button
                onClick={() => addToCart(selectedGame)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
            <button onClick={closeModal} className="close-modal-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameList;

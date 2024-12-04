import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Trạng thái thanh toán thành công
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handlePayment = () => {
    // Giả lập quá trình thanh toán thành công
    setTimeout(() => {
      setPaymentSuccess(true);
      localStorage.removeItem("cart"); // Xóa giỏ hàng sau khi thanh toán thành công
      setCart([]);
    }, 2000); // Mô phỏng quá trình thanh toán mất 2 giây
  };

  const handleContinueShopping = () => {
    navigate("/games");
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((game, index) => (
              <li key={index}>
                <img src={game.imageUrl} alt={game.name} />
                <div>{game.name}</div>
                <div>
                  ${(game.price * (1 - game.discount / 100)).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <button onClick={handlePayment} className="pay-now-btn">
            Thanh toán
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Thông báo thanh toán thành công */}
      {paymentSuccess && (
        <div className="payment-success">
          <h2>Thanh toán thành công!</h2>
          <p>
            Cảm ơn bạn đã mua sắm tại Christmas Game Store. Chúc bạn có những
            phút giây vui vẻ!
          </p>
          <button onClick={handleContinueShopping}>Tiếp tục mua sắm</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

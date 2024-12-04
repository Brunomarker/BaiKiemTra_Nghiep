import React from "react";
import "./HomePage.css"; // Make sure to import the CSS file

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1>Welcome to the Christmas Game Store!</h1>
      <p>Enjoy our holiday-themed games and exclusive offers this season!</p>

      {/* Sale Off Image */}
      <div className="image-container">
        <img
          src="https://i2.ex-cdn.com/largeer.com/files/content/2022/12/26/giam-gia-god-of-war-2018-tren-steam-1511.jpg"
          alt="Christmas Sale Off - Special discounts on holiday games"
          className="sale-off-image"
        />
      </div>

      <div className="holiday-message">
        <p>🎄🎁 Merry Christmas and Happy New Year! 🎁🎄</p>
      </div>
    </div>
  );
};

export default HomePage;

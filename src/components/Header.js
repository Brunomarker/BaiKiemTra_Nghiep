// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS file for header styling

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // Set user to null after logout
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Christmas Game Store</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        {user && <Link to="/wishlist">Wishlist</Link>}
        {user && <Link to="/cart">Cart</Link>}

        {!user ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <span className="welcome-message">Welcome, {user}!</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GameList from "./pages/GameList";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  // Retrieve the saved user from localStorage on page load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <Router>
      {/* Header with conditional rendering based on the user's login state */}
      <Header user={user} setUser={setUser} />
      <Routes>
        {/* Protected route: redirects to register page if no user is logged in */}
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/register" />}
        />
        {/* Register route: redirects to home if the user is already logged in */}
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        {/* Login route: redirects to home if the user is already logged in */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />
        {/* Protected routes for logged-in users */}
        <Route
          path="/games"
          element={user ? <GameList /> : <Navigate to="/login" />}
        />
        <Route
          path="/wishlist"
          element={user ? <Wishlist /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

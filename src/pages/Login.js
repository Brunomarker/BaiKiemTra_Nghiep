// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS for login styling

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!username || !password) {
      setError("Please fill in both fields");
      return;
    }

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if the entered username and password match the stored data
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      setUser(username);
      localStorage.setItem("user", JSON.stringify(username)); // Store the logged-in username
      navigate("/"); // Redirect to home page after successful login
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;

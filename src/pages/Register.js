// Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import CSS for register styling

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!username || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check if the user already exists
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser) {
      setError("User already exists!");
      return;
    }

    // Save new user data to localStorage
    const newUser = { username, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    // Redirect to login page after successful registration
    navigate("/login");
  };

  return (
    <div className="register">
      <h1>Create an Account</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
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
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Register
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;

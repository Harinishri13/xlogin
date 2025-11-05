import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!username.trim() || !password.trim()) {
      setMessage("Please fill in both fields");
      setMessageType("error");
      return;
    }

    // Validate credentials
    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      setMessageType("success");
    } else {
      setMessage("Invalid username or password");
      setMessageType("error");
    }
  };

  return (
    <div className="app">
      <div className="login-container">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="logo">
              <div className="logo-icon">🔒</div>
              <h1>XLogin</h1>
            </div>
            <p className="tagline">Secure Access Portal</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          {/* Message Display */}
          {message && (
            <div className={`message ${messageType}`}>
              <div className="message-icon">
                {messageType === "success" ? "✓" : "⚠"}
              </div>
              <span>{message}</span>
            </div>
          )}

          {/* Demo Credentials */}
          <div className="demo-credentials">
            <div className="demo-header">
              <span className="demo-icon">ℹ️</span>
              <h3>Demo Credentials</h3>
            </div>
            <div className="credentials-list">
              <div className="credential-item">
                <span className="credential-label">Username:</span>
                <span className="credential-value">user</span>
              </div>
              <div className="credential-item">
                <span className="credential-label">Password:</span>
                <span className="credential-value">password</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

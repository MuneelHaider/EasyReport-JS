import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 
import Signup from './Signup'; 
import './index.css';


const App = () => {
  return (
    <Routes>
      {}
      <Route path="/" element={
        <div className="login-container">
          <div className="login-left">
            <div className="welcome-box">
              <h2>Welcome!</h2>
              <form>
                <div className="input-group">
                  <label htmlFor="cnic">CNIC:</label>
                  <input type="text" id="cnic" name="cnic" />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" />
                </div>
                <div className="login-actions">
                  <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                  <button type="submit">Login</button>
                </div>
              </form>
              <div className="register-link">
                <p>Don't have an account? <Link to="/register">Register</Link></p> {/* Use Link here */}
              </div>
            </div>
          </div>
          <div className="login-right">
            <img src="logo.jpg" alt="EasyReport Logo" className="logo" />
          </div>
        </div>
      } />
      
      {/* Define the route for the signup page */}
      <Route path="/register" element={<Signup />} /> 
    </Routes>
  );
};

export default App;

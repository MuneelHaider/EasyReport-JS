
import React from 'react';
import './Signup.css';
import logo from './logo.png';

const Signup = () => {
  return (
    <div className="container">
      <div className="form-section">
        <div className="welcome-box">
          <form className="register-form">
            <h2>Register Here!</h2> {}
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />

            <button type="submit">Register</button>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              Don't have an account? <a href="/login">Login</a>
            </p> {}
          </form>
        </div>
      </div>
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Signup;

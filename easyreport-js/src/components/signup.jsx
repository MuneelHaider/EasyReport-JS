import React, { useState } from 'react';
import '../styles/Signup.css';
import logo from '../images/logo.png';
import axios from 'axios';

const Signup = () => {
  const [SignUp, setSignup] = useState({
    name: '',
    email: '',
    cnic: '',  
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    phone: ''  // Corrected to match the name used in input field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Special handling for CNIC field
    if (name === 'cnic') {
      updatedValue = updatedValue.replace(/\D/g, ''); // Remove all non-digit characters
      if (updatedValue.length > 5 && updatedValue.length <= 12) {
        updatedValue = updatedValue.replace(/^(\d{5})(\d+)/, '$1-$2');
      } else if (updatedValue.length > 12) {
        updatedValue = updatedValue.replace(/^(\d{5})(\d{7})(\d+)/, '$1-$2-$3');
      }
    }

    setSignup({ ...SignUp, [name]: updatedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = SignUp;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    axios.post('http://localhost:3001/signup', SignUp)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="form-section">
        <div className="welcome-box">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register Here!</h2>
            
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />

            <label htmlFor="cnic">CNIC</label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              placeholder="Enter your CNIC"
              value={SignUp.cnic}
              onChange={handleChange}
              maxLength="15"
              required
            />

            <label htmlFor="dob">Date of Birth</label>
            <input
              type="text"
              id="dob"
              name="dob"
              onChange={handleChange}
              placeholder="MM/DD/YYYY"
              required
            />

            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              onChange={handleChange}  // Correctly placed onChange
              value={SignUp.gender}
              required
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={SignUp.phone}  
              onChange={handleChange}
              placeholder="Enter your phone number"
              maxLength="11"  // maxLength now works because type is text
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />

            <button type="submit">Register</button>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              Already have an account? <a href="/login">Login</a>
            </p>
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

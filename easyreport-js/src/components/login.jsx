import '../styles/loginpage.css';
import logo from '../images/logo.png';

import React from 'react';
function LoginPage()
{
    return <div className="login-container">
    <div className="login-box">
      <div className="login-form">
        <h2>Welcome</h2>
        <label>CNIC:</label>
        <input type="number" name="cnic" />
        <label>Password:</label>
        <input type="password" name="password" />
        <div className="forgetPassword">
          <a href="/forgot-password">Forgot Password</a>
        </div>
        <button className="login-button">Login</button>
        <div className="signup">
          <a href="/register">Don't have an account? SignUp</a>
        </div>
      </div>
      <div className="login-logo">
      <img src={logo} alt="EasyReport Logo" />
        <h1>EasyReport</h1>
      </div>
    </div>
  </div>

}
export default LoginPage;
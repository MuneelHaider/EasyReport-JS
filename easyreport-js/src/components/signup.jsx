import React, { useState } from "react";
import '../styles/Signuppage.css';
import logo from '../images/logo.png';

function SignUp(props ) {
  const {Name} = props
  const [formData, setFormData] = useState({
    fullName: '',
    cnic: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="signup_container">
      <div className="logo-section">
        <img src={logo} alt="EasyReport Logo" className="logo" />
      </div>
      <div className="form_container">
        <h2>Sign Up!</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label for ="name" >Name</label>
            <input id ="name " type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
            <label>CNIC</label>
            <input type="number" name="cnic" placeholder="CNIC" value={formData.cnic} onChange={handleChange} />
            </div>
            <div>
            <label>email</label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />            </div>
            <div>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
            </div>   
            <button type="submit">Sign Up</button>
        </form>
        <p>Having an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default SignUp;

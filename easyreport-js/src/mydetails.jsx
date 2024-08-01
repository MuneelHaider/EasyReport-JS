import React, { useState, useEffect } from 'react';
import '../styles/Mydetails.css';

const Mydetails = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        cnic: '',
        gender: 'male',
        city: '',
        dob: '',
        height: '',
        weight: '',
        bloodGroup: 'AB+',
        allergies: '',
        easypaisa: '',
        jazzCash: '',
        accountNumber: '',
        accountHolderName: '',
        picture: null // Add picture to the state
    });

    // Fetch data from the backend when the component mounts
    useEffect(() => {
        fetch('/api/getFormData')
            .then(response => response.json())
            .then(data => setFormData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file input change for picture
    const handleFileChange = (e) => {
        setFormData({ ...formData, picture: e.target.files[0] });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        for (const key in formData) {
            data.append(key, formData[key]);
        }

        fetch('/api/saveFormData', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="section personal-details">
                <h2>Personal Details</h2>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
            
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>CNIC</label>
                    <input
                        type="number"
                        name="cnic"
                        value={formData.cnic}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Picture</label>
                    <input
                        type="file"
                        name="picture"
                        onChange={handleFileChange}
                    />
                </div>
            </div>

            <div className="section medical-details">
                <h2>Medical Details</h2>
                <div className="form-group">
                    <label>Height</label>
                    <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Weight</label>
                    <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Blood Group</label>
                    <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                    >
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Allergies</label>
                    <input
                        type="text"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="section payment-details">
                <h2>Payment Details</h2>
                <div className="form-group">
                    <label>EasyPaisa</label>
                    <input
                        type="number"
                        name="easypaisa"
                        value={formData.easypaisa}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Jazz Cash</label>
                    <input
                        type="number"
                        name="jazzCash"
                        value={formData.jazzCash}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Account/Number</label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Account Holder Name</label>
                    <input
                        type="text"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <button type="submit" className="save-button">Save</button>
        </form>
    );
};

export default Mydetails;

import React, { useState } from 'react';
import Navbar from './navbar';
import AcceptAppointment from './acceptappointment';
import '../styles/finalappointmentdetails.css';

const FinalAppointmentDetails = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    doctorName: "John Doe",
    specialization: "Cardiologist",
    day: "Monday",
    date: "2024-08-15",
    time: "10:00 AM",
    price: "$100",
    location: "123 Medical St, Springfield",
  });

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="form-section">
          <h2>Medical Details</h2>
          <div className="form-group">
            <div>
              <label>Height</label>
              <input type="text" placeholder="Enter height" />
            </div>
            <div>
              <label>Weight</label>
              <input type="text" placeholder="Enter weight" />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label>Past Surgeries (if any)</label>
              <input type="text" placeholder="Enter details" />
            </div>
            <div>
              <label>Allergies (if any)</label>
              <input type="text" placeholder="Enter details" />
            </div>
          </div>
        </div>
        <div className="form-section">
          <h2>Payment Details</h2>
          <div className="form-group">
            <div>
              <label>
                <input type="radio" name="payment" value="JazzCash" />
                JazzCash
              </label>
              <input type="text" placeholder="Enter JazzCash Number" />
            </div>
            <div>
              <label>
                <input type="radio" name="payment" value="EasyPaisa" />
                EasyPaisa
              </label>
              <input type="text" placeholder="Enter EasyPaisa Number" />
            </div>
          </div>
          <div className="note">
            <p>Note: Following are the details for JazzCash and EasyPaisa Payment</p>
            <p>Name: ABC XYZ</p>
            <p>JazzCash/EasyPaisa: +9212345678</p>
          </div>
        </div>
        <div>
          <AcceptAppointment {...appointmentDetails} />
        </div>
      </div>
    </div>
  );
};

export default FinalAppointmentDetails;

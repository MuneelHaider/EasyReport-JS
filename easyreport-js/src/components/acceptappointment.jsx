import React from 'react';
import '../styles/acceptappointment.css';

function AcceptAppointment(props) {
  return (
    <div className="AcceptAppointment">
      <div className="Upperpart">
        <div className="DoctorDetails">
          <h2>Dr. {props.doctorName}</h2>
          <h3>{props.specialization}</h3> 
        </div>

        <div className="AppointmentDetails">
          <p>Day: {props.day}</p>
          <p>Date: {props.date}</p> 
          <p>Time: {props.time}</p> 
          <p>Price: {props.price}</p>
          <p>Location: {props.location}</p>
        </div>
      </div>
      <div className="lowerPart">
        <p>
          Book your appointment now for a thorough medical checkup with Dr. {props.doctorName}. Ensure personalized care and expert attention. Proceed to payment to confirm your booking and take a proactive step towards your well-being.
        </p>
        <button>Book Appointment</button> 
      </div>
    </div>
  );
}

export default AcceptAppointment;

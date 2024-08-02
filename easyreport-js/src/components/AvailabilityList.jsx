import React from 'react';
import '../styles/Availabilty.css';

function Availability({ Time }) {
  return (
    <div className="Container">
      {Time.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Availability;

import React from 'react';
import '../styles/report.css';

const ReportContainer = ({ doctorName, occupation, date, day, month, reportId, time }) => {
  return (
    <div className="appointments-container">
      <div className="appointment-card">
        <div className="appointment-info">
          <div className="appointment-details">
            <p className="date">{date} {month}, {day}</p>
            <p className="time">{time}</p>
          </div>
          <div className="doctor-details">
            <p className='Reportfrom'>Report From <br></br><a href="#">Dr {doctorName}</a></p>
            <p className="occupation">{occupation}</p>
          </div>
          <div className="buttons">
            <button className="btn see-report">See Report</button>
            <button className="btn download-report">Download</button>
          </div>
        </div>
        <p className="note">You can download or see your report using the buttons above.</p>
      </div>
    </div>
  );
};

export default ReportContainer;

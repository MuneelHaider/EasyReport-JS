import React, { useState, useEffect } from 'react';
import ReportContainer from './ReportContainer';
import { fetchClasses } from './ReportData';
import NavBar from './navbar'
import'../styles/ReportsMain.css'

const Report = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      const data = fetchClasses();
      setClasses(data);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='Containner'>

        <div className='NavBar'>
        <NavBar />
        </div>
    <div className="Report">
   
      {classes.map((classItem, index) => (
        <ReportContainer
          key={index}
          doctorName={classItem.doctorName}
          occupation={classItem.occupation}
          date={classItem.date}
          day={classItem.day}
          month={classItem.month}
          reportId={classItem.reportId}
          time = {classItem.time}
        />
      ))}
    </div>
    </div>
  );
};

export default Report;

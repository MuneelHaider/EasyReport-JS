import React, { useState } from 'react'
import "./PateintDashboard.css"
import logo from "../public/logo.png"
import { FaArrowLeft, FaArrowRight, FaBriefcase, FaMapMarkerAlt, FaSearch } from 'react-icons/fa'; 
import doctorImg from "../public/doctor.jpg"
const Patientdasboard = () => {

 
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="logo" ><img src={logo} alt="logo" width={50} height={50} /></div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Appointments</a></li>
          <li><a href="#">Chat</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">My details</a></li>
        </ul>
        <div className="nav-actions">
          <button className="login-btn">Logout</button>
          <img src={logo} alt="Profile" className="profile-icon" />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    );
  };


  const SearchDoctor = () => {
    return (
      <div className="search-doctor">
      <h2>Search for a Doctor</h2>
        
        <div className='my-search' style={{margin:"auto 0 ",  justifySelf:"center",justifyContent:"center"}}>
        <input type="text" placeholder="Search..." className="search-input" />
       
       <button className="search-btn" >  <FaSearch className="search-icon"   /> Search  </button>

        </div>
       
    </div>
    );
  };



  const DoctorCard = ({ doctor }) => {
    return (


          <div className="my-card">
            <img className="card-img" src={doctorImg} alt={doctor.name} />
            <div className="card-content">
              <h2 className="card-title">{doctor.name}</h2>
              <p className="card-occupation">
                <FaBriefcase /> {doctor.occupation}
              </p>
              <p className="card-city">
                <FaMapMarkerAlt /> {doctor.city}
              </p>
            </div>
            <div className="card-actions">
              <a href={`/doctor/${doctor.id}`} className="card-button">
                More Details
              </a>
            </div>
          </div>
   
    );
  };


  const doctors = [
    { id: 1, name: 'Dr. John Doe', occupation: 'Cardiologist', city: 'New York', image: 'doctor1.jpg' },
    { id: 2, name: 'Dr. Jane Smith', occupation: 'Neurologist', city: 'Los Angeles', image: 'doctor2.jpg' },
    { id: 3, name: 'Dr. Mark Johnson', occupation: 'Dermatologist', city: 'Chicago', image: 'doctor3.jpg' },
    { id: 4, name: 'Dr. Lisa Brown', occupation: 'Pediatrician', city: 'Houston', image: 'doctor4.jpg' },
    { id: 5, name: 'Dr. James Davis', occupation: 'Surgeon', city: 'Phoenix', image: 'doctor5.jpg' },
    { id: 6, name: 'Dr. Patricia Wilson', occupation: 'Psychiatrist', city: 'Philadelphia', image: 'doctor6.jpg' },
    { id: 7, name: 'Dr. James Davis', occupation: 'Surgeon', city: 'Phoenix', image: 'doctor5.jpg' },
    { id: 8, name: 'Dr. Patricia Wilson', occupation: 'Psychiatrist', city: 'Philadelphia', image: 'doctor6.jpg' },
  ];
  
  const DoctorList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const doctorsPerPage = 4;
  
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  
    const handleNextPage = () => {
      if (indexOfLastDoctor < doctors.length) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    };
  
    return (
      <div className="my-container">
        <div className="card-container">
          {currentDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            className="prev-button"
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextPage}
            className="next-button"
            disabled={indexOfLastDoctor >= doctors.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
  };



  

  return (
    <div>
    <Navbar/> 
    <SearchDoctor/>
    <DoctorList/>


    </div>
  )
}

export default Patientdasboard
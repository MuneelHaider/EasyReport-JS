import React, { useState, useEffect } from "react";
import Availability from "./AvailabilityList.jsx";
import "../styles/Appointment.css";
import doctor from '../images/doctor.jpeg';

function DoctorAppointment() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [appointmentType, setAppointmentType] = useState(""); // "onsite", "online", or empty
    const [onlineTypes, setOnlineTypes] = useState([]); // "chat", "call", "video"

    const formatDate = (date) => {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        const today = new Date();
        const dateList = [];
        for (let i = 0; i < 7; i++) { // Next 7 days
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dateList.push({ 
                label: formatDate(date),
                value: date.toISOString().split('T')[0] // For value, use ISO format
            });
        }
        setDates(dateList);
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDateSelect = (dateValue) => {
        setSelectedDate(dateValue);
        setDropdownOpen(false);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleAppointmentTypeChange = (event) => {
        const value = event.target.value;

        if (value === "onsite") {
            setAppointmentType("onsite");
            setOnlineTypes([]); // Clear online types if onsite is selected
        } else if (value === "online") {
            setAppointmentType("online");
        }
    };

    const handleOnlineTypeChange = (event) => {
        const value = event.target.value;
        setOnlineTypes(prev =>
            prev.includes(value) ? prev.filter(type => type !== value) : [...prev, value]
        );
    };

    const Time = [
        "12:00 pm", "12:00 pm", "12:00 pm", "12:00 pm", "12:00 pm", "12:00 pm", "10:00 pm",
        "11:00 pm", "12:00 pm", "12:00 pm", "12:00 pm", "12:00 pm", "12:00 pm", "12:00 pm",
        "10:00 pm", "11:00 pm"
    ];

    return (
        <div className="AppointmentContainer">
            <div className="UpperSection">
                <div className="ImageSection">
                    <img src={doctor} alt="doctor_pic" />
                    <p>DoctorName</p>
                </div>
                <div className="AvailabilitySection">
                    <div className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>
                            {selectedDate ? `Selected Date: ${formatDate(new Date(selectedDate))}` : "Select Date"}
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-content">
                                {dates.map((date, index) => (
                                    <div key={index} onClick={() => handleDateSelect(date.value)}>
                                        {date.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <Availability Time={Time} />
                </div>
            </div>
            <div className="LowerSection">
                <form>
                    <div className="form-group">
                        <label htmlFor="time-slot">Select Time Slot:</label>
                        <select id="time-slot" value={selectedTime} onChange={handleTimeChange}>
                            <option value="">Select Time</option>
                            {Time.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <p>Select Appointment Type:</p>
                        <label>
                            <input
                                type="radio"
                                name="appointment-type"
                                value="onsite"
                                checked={appointmentType === "onsite"}
                                onChange={handleAppointmentTypeChange}
                            />
                            Onsite - $50
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="appointment-type"
                                value="online"
                                checked={appointmentType === "online"}
                                onChange={handleAppointmentTypeChange}
                            />
                            Online
                        </label>
                    </div>
                    {appointmentType === "online" && (
                        <div className="form-group">
                            <p>Select Online Type:</p>
                            <label>
                                <input
                                    type="checkbox"
                                    name="online-type"
                                    value="chat"
                                    checked={onlineTypes.includes("chat")}
                                    onChange={handleOnlineTypeChange}
                                />
                                Chat - $30
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="online-type"
                                    value="call"
                                    checked={onlineTypes.includes("call")}
                                    onChange={handleOnlineTypeChange}
                                />
                                Call - $40
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="online-type"
                                    value="video"
                                    checked={onlineTypes.includes("video")}
                                    onChange={handleOnlineTypeChange}
                                />
                                Video Call - $60
                            </label>
                        </div>
                    )}
                    <button type="submit">Book Appointment</button>
                </form>
            </div>
        </div>
    );
}

export default DoctorAppointment;

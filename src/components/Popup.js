import React from 'react';
import './Popup.css';
import { useNavigate } from 'react-router-dom';

const Popup = ({ show, onClose, chair, selectedDay, bookingDetails }) => {
    const navigate = useNavigate();

    if (!show) {
        return null;
    }

    const handleConfirmBooking = () => {
        // Store the final booking details in sessionStorage
        const finalDetails = {
            ...bookingDetails,
            chair,
            selectedDay,
        };
        console.log("Final booking details to store:", finalDetails); // Log the final details
        sessionStorage.setItem('finalBookingDetails', JSON.stringify(finalDetails));

        // Show alert and navigate to the BillPage component
        alert("Successfully your slot is registered");
        navigate('/billpage');
    };

    const displayDate = selectedDay
        ? `${selectedDay.dayName}, ${selectedDay.date} ${selectedDay.month} ${selectedDay.year}`
        : 'No date selected';

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Booking Confirmation</h2>
                <p><strong>Service:</strong> {bookingDetails.service}</p>
                <p><strong>Price:</strong> ₹{bookingDetails.price}</p>
                <p><strong>Location:</strong> {bookingDetails.location}</p>
                <p><strong>Chair:</strong> {chair}</p>
                <p><strong>Date:</strong> {displayDate}</p>
                <button className="btn btn-primary" onClick={handleConfirmBooking}>Confirm Booking</button>
                <button className="btn btn-secondary" style={{marginLeft:'25px'}} onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default Popup;

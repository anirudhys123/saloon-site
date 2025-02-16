import React from 'react';
import { useNavigate } from 'react-router-dom';
import RazorpayPayment from './RazorpayPayment'; // Adjust the import path as necessary
import './BillPage.css';

const BillPage = () => {
    const navigate = useNavigate();
    
    const finalBookingDetails = JSON.parse(sessionStorage.getItem('finalBookingDetails')) || {};
    const { service, price, location, chair, selectedDay, salonName, salonId } = finalBookingDetails;

    const displayDate = selectedDay
        ? `${selectedDay.dayName}, ${selectedDay.date} ${selectedDay.month} ${selectedDay.year}`
        : 'No date selected';

    const handleModifySlot = () => {
        navigate(`/calendar`);
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handlePaymentSuccess = (paymentId) => {
        let reservations = JSON.parse(sessionStorage.getItem('reservations')) || [];
        reservations.push({ ...finalBookingDetails, paymentId });
        sessionStorage.setItem('reservations', JSON.stringify(reservations));
        navigate('/reservation');
    };

    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60900.42005777843!2d78.31224822167968!3d17.446486999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dff61e7967%3A0x85a0e06f094ae18d!2sNaturals%20Salon!5e0!3m2!1sen!2sin!4v1718521427419!5m2!1sen!2sin"
                width="80%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bill-page">
                <h1 style={{ fontSize: '30px', marginTop: '7px' }}>Booking Details</h1>
                <div className="booking-details" style={{ marginLeft: '50px', width:'100%' }}>
                    <p><strong>Salon:</strong> <span>{salonName}</span></p>
                    <p><strong>Location:</strong> <span>{location}</span></p>
                    <p><strong>Date:</strong> <span>{displayDate}</span></p>
                    <p><strong>Service:</strong> <span>{service}</span></p>
                    <p><strong>Chair:</strong> <span>{chair}</span></p>
                    <p><strong>Price:</strong> <span>₹{price}</span></p>
                </div>
                <div className="button-container">
                    <button className="btn btn-primary" onClick={handleModifySlot} style={{margin:'10px',fontSize:'20px'}}>Modify Slot</button>
                    <button className="btn btn-secondary" onClick={handleCancel} style={{margin:'10px',fontSize:'20px'}}>Cancel Slot</button>
                    <RazorpayPayment 
                        amount={price}
                        bookingDetails={finalBookingDetails}
                        onPaymentSuccess={handlePaymentSuccess}
                    />
                </div>
            </div>
        </>
    );
};

export default BillPage;

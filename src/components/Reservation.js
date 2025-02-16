import React, { useEffect, useState } from 'react';
import './Reservation.css';

const Reservation = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const storedReservations = JSON.parse(sessionStorage.getItem('reservations')) || [];
        setReservations(storedReservations);
    }, []);

    const shareReservations = () => {
        if (navigator.share && reservations.length > 0) {
            navigator.share({
                title: 'Reservations',
                text: `Here are your reservation details:\n\n${generateReservationText(reservations)}`,
                url: window.location.href
            })
            .then(() => console.log('Share successful'))
            .catch((error) => console.log('Share failed', error));
        } else {
            alert('Sharing is not supported on this browser.');
        }
    };
    // const clearReservations = () => {
    //     sessionStorage.removeItem('reservations');
    //     setReservations([]);
    // };

    const generateReservationText = (reservations) => {
        return reservations.map((bookingDetails) => {
            const { service, price, location, chair, selectedDay, salonName } = bookingDetails;
            const displayDate = selectedDay
                ? `${selectedDay.dayName}, ${selectedDay.date} ${selectedDay.month} ${selectedDay.year}`
                : 'No date selected';
            return `Salon: ${salonName}\nLocation: ${location}\nDate: ${displayDate}\nService: ${service}\nChair: ${chair}\nPrice: ₹${price}\n`;
        }).join('\n\n');
    };

    return (
        <div className="reservation-page">
            <h1 style={{ fontSize: '40px', marginTop: '7px' }}>Reservation Details</h1>
            <div className="reservations-container">
                {reservations.length === 0 ? (
                    <p style={{fontSize:'25px'}}> No reservations found.</p>
                ) : (
                    reservations.map((bookingDetails, index) => {
                        const { service, price, location, chair, selectedDay, salonName } = bookingDetails;
                        const displayDate = selectedDay
                            ? `${selectedDay.dayName}, ${selectedDay.date} ${selectedDay.month} ${selectedDay.year}`
                            : 'No date selected';

                        return (
                            <div key={index} className="booking-details">
                                <p><strong>Salon:</strong> <span>{salonName}</span></p>
                                <p><strong>Location:</strong> <span>{location}</span></p>
                                <p><strong>Date:</strong> <span>{displayDate}</span></p>
                                <p><strong>Service:</strong> <span>{service}</span></p>
                                <p><strong>Chair:</strong> <span>{chair}</span></p>
                                <p><strong>Price:</strong> <span>₹{price}</span></p>
                            </div>
                        );
                    })
                )}
            </div>
            <div className="button-container">
                <button onClick={shareReservations} className="share-button">Share</button>
                {/* <button onClick={clearReservations} className="clear-button">Clear</button> */}
            </div>
        </div>
    );
};

export default Reservation;
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Calendar = () => {
    const navigate = useNavigate();

    const generateDays = (year) => {
        const days = [];
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const daysInMonth = [31, (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        for (let month = 0; month < 12; month++) {
            for (let day = 1; day <= daysInMonth[month]; day++) {
                const date = new Date(year, month, day);
                days.push({
                    dayName: date.toLocaleString('default', { weekday: 'short' }),
                    date: day,
                    month: months[month],
                    year: year,
                    isSelected: false,
                });
            }
        }
        return days;
    };

    const days = generateDays(2024);
    const months = [...new Set(days.map(day => day.month))];
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
    const [selectedDay, setSelectedDay] = useState(null); // No default selection
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const scrollRef = useRef(null);

    const handlePrevMonth = () => {
        if (currentMonthIndex > 0) {
            setCurrentMonthIndex(currentMonthIndex - 1);
            scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
        }
    };

    const handleNextMonth = () => {
        if (currentMonthIndex < months.length - 1) {
            setCurrentMonthIndex(currentMonthIndex + 1);
            scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
        }
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setSelectedTimeSlot(null);
    };

    const handleTimeSlotClick = (time) => {
        setSelectedTimeSlot(time);
    };

    const handleContinue = () => {
        if (selectedDay && selectedTimeSlot) {
            sessionStorage.setItem('selectedDate', JSON.stringify(selectedDay));
            sessionStorage.setItem('selectedTimeSlot', JSON.stringify(selectedTimeSlot));
            navigate('/card-page'); // Navigate to card page
        } else {
            alert('Please select a day and time slot');
        }
    };

    return (
        <>
        {/* <Header /> */}
        <div className="calendar-container">
            <h1> Please Select the date</h1>
            <div className="calendar-header">
                <button className="nav-button" onClick={handlePrevMonth}>{'<'}</button>
                <span>{months[currentMonthIndex]} 2024</span>
                <button className="nav-button" onClick={handleNextMonth}>{'>'}</button>
            </div>
            <div className="calendar-scroll" ref={scrollRef}>
                {months.map((month, index) => (
                    <div key={index} className="calendar-month" style={{ display: index === currentMonthIndex ? 'flex' : 'none' }}>
                        {days.filter(day => day.month === month).map((day, idx) => (
                            <button
                                key={idx}
                                className={`calendar-day ${day.isSelected ? 'selected' : ''} ${day === selectedDay ? 'active' : ''}`}
                                onClick={() => handleDayClick(day)}
                            >
                                <div className="day-name">{day.dayName}</div>
                                <div className="day-date">{day.date}</div>
                            </button>
                        ))}
                    </div>
                ))}
            </div>

            <div className="time-slots-container">
                <h2>{selectedDay ? `Available Time Slots for ${selectedDay.date} ${selectedDay.month}` : 'Available Time Slots'}</h2>
                <div className="time-slots">
                    {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((time, index) => (
                        <button
                            key={index}
                            className={`time-slot ${time === selectedTimeSlot ? 'active' : ''}`}
                            onClick={() => handleTimeSlotClick(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>
                <button className="continue-button" onClick={handleContinue}>Continue</button>
            </div>
        </div>
        {/* <Footer /> */}
        </>
    );
}

export default Calendar;

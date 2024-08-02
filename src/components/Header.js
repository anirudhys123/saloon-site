import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../Assets/ani-new.png'; // Import your logo image file
import './Header.css';
import { FaLocationDot } from "react-icons/fa6"; // Correct import for FaLocationDot
import { IoHomeSharp } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
            <div className='logo-wrapper'>
                <img src={logo} alt="Salon Logo" className="logo"  width={100} height={300} />
                <div className='current-location'>
                    <span style={{ fontSize: '20px', marginRight: '10px', marginLeft: '10px' }}>Current Location</span>
                    <FaLocationDot className="location-icon" />
                </div>
                <div className='search-container'>
                    <select style={{ fontSize: '20px' }}>
                        <option>SR Nagar</option>
                        {/* Add more options as needed */}
                    </select>
                    <input type="search" className='form-control' placeholder='Search your saloon' style={{ fontSize: '20px' }} />
                    <button className='search'>Search</button>
                </div>
                <div className='home'>
                    <Link to="/" className="home-link">
                        <IoHomeSharp /> Home
                    </Link>
                </div>
                <div className='reserve'>
                    <Link to="/reservation" className="reserve-link">
                        <FaCalendarDays style={{fontSize:'30px'}} /> Reservations
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

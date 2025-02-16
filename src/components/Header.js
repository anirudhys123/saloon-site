import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/ani-new.png';
import { FaLocationDot, FaBars, FaXmark } from "react-icons/fa6"; // FaXmark replaces FaTimes
import { IoHomeSharp } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className='logo-wrapper'>
                {/* Logo */}
                <img src={logo} alt="Salon Logo" className="logo" width={100} height={300} />

                {/* Hamburger Button */}
                <button className="hamburger-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <FaXmark /> : <FaBars />}
                </button>

                {/* Desktop Navigation */}
                <nav className="desktop-menu">
                    <div className='current-location'>
                        <span>Current Location</span>
                        <FaLocationDot className="location-icon" />
                    </div>

                    <div className='search-container'>
                        <select>
                            <option>SR Nagar</option>
                        </select>
                        <input type="search" placeholder='Search your salon' />
                        <button className='search'>Search</button>
                    </div>

                    <div className='home'>
                        <Link to="/" className="home-link">
                            <IoHomeSharp /> Home
                        </Link>
                    </div>

                    <div className='reserve'>
                        <Link to="/reservation" className="reserve-link">
                            <FaCalendarDays /> Reservations
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className='current-location'>
                    <span>Current Location</span>
                    <FaLocationDot className="location-icon" />
                </div>

                <div className='search-container'>
                    <select>
                        <option>SR Nagar</option>
                    </select>
                    <input type="search" placeholder='Search your salon' />
                    <button className='search'>Search</button>
                </div>

                <div className='home'>
                    <Link to="/" className="home-link" onClick={toggleMenu}>
                        <IoHomeSharp /> Home
                    </Link>
                </div>

                <div className='reserve'>
                    <Link to="/reservation" className="reserve-link" onClick={toggleMenu}>
                        <FaCalendarDays /> Reservations
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;

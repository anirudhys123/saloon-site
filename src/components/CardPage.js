import React, { useState } from 'react';
import './CardPage.css';
import chair from "../Assets/chair.png";
import Popup from '../components/Popup';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const CardPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedChair, setSelectedChair] = useState('');

    const handleCardClick = (chair) => {
        setSelectedChair(chair);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedChair('');
    };

    // Retrieve booking details from sessionStorage
    const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails')) || {};

    return (
        <>
            {/* <Header/> */}
            <h1 style={{marginTop:'40px'}}>Please Select the chair</h1>
            <div className="card-page">
                
                <div className="chair-card" onClick={() => handleCardClick('Chair 1')}>
                    <h1>Chair 1</h1>
                    <div className='image'><img src={chair} alt="Chair 1" /></div>
                </div>
                <div className="chair-card" onClick={() => handleCardClick('Chair 2')}>
                    <h1>Chair 2</h1>
                    <div className='image'><img src={chair} alt="Chair 2" /></div>
                </div>
                <div className="chair-card" onClick={() => handleCardClick('Chair 3')}>
                    <h1>Chair 3</h1>
                    <div className='image'><img src={chair} alt="Chair 3" /></div>
                </div>
                <Popup
                    show={showPopup}
                    onClose={closePopup}
                    chair={selectedChair}
                    selectedDay={JSON.parse(sessionStorage.getItem('selectedDate'))} // Assuming date is stored in sessionStorage
                    bookingDetails={bookingDetails}
                />
            </div>
            {/* <Footer/> */}
        </>
    );
};

export default CardPage;

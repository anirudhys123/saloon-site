import React from 'react';
import { useNavigate } from 'react-router-dom';
import tg from "../Assets/tg.jpeg";
import tgLogo from "../Assets/tg.jpeg"; // Logo specific to Tony & Guy
import './SalonCard.css';

const TonyAndGuy = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/services', { state: { salonType: 'women', salonName: 'Tony & Guy', logo: tgLogo } });
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={tg} alt="Tony & Guy" className="card-img-top" style={{ height: '300px' }} />
      <div className="card-body">
        <h2 className="card-title">(Only For Women)</h2>
      </div>
      <div className='card-footer'>
        <span style={{ fontSize: '25px',fontWeight:'bold' }}> Customer Rating: </span>
        <br></br>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <i class="bi bi-star-half large-icon"></i>
        <span className="bi bi-star large-icon"></span>
        </div>
    </div>
  );
};

export default TonyAndGuy;

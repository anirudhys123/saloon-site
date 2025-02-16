import React from 'react';
import { useNavigate } from 'react-router-dom';
import ac from "../Assets/ac.jpeg";
import acLogo from "../Assets/ac.jpeg"; // Logo specific to American Crew
import './SalonCard.css';

const AmericanCrew = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/services', { state: { salonType: 'both', salonName: 'American Crew', logo: acLogo } });
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={ac} alt="American Crew" className="card-img-top" style={{ height: '300px' }} />
      <div className="card-body">
        <h2 className="card-title">(For Both Men & Women)</h2>
      </div>
      <div className='card-footer'>
        <span style={{ fontSize: '25px',fontWeight:'bold' }}> Customer Rating: </span>
        <br></br>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star large-icon"></span>
        <span className="bi bi-star large-icon"></span>
       
        </div>
    </div>
  );
};

export default AmericanCrew;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import regis from "../Assets/regis.png";
import regisLogo from "../Assets/regis.png"; // Logo specific to Regis Salon
import './SalonCard.css';

const RegisSalon = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/services', { state: { salonType: 'men', salonName: 'Regis Salon', logo: regisLogo } });
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={regis} alt="Regis Salon" className="card-img-top" style={{ height: '300px' }} />
      <div className="card-body">
        <h2 className="card-title">(Only For Men)</h2>
      </div>
      <div className='card-footer'>
        <span style={{ fontSize: '25px' }}> Customer Rating: </span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <i class="bi bi-star-half large-icon"></i>
        <span className="bi bi-star large-icon"></span>
        <span className="bi bi-star large-icon"></span>
        </div>
    </div>
  );
};

export default RegisSalon;

import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import RegisSalon from '../components/RegisSalon';
import TonyAndGuy from '../components/TonyAndGuy';
import AmericanCrew from '../components/AmericanCrew';
import './HomePage.css';
import img1 from '../Assets/3..jpg'
import ImageSlider from './ImageSlider';


const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
       <img src = {img1} style={{marginTop:'30px',width:'60%',height:'320px'}} />
       </div>
       <ImageSlider />
      
      <h1 style={{ marginTop: '50px',marginBottom:'-10px',marginLeft:'50px' }}>Popular Salons</h1>
      
      <div className="home-page-container">
        <div className="card-container">
          <RegisSalon />
        </div>
        <div className="card-container">
          <TonyAndGuy />
        </div>
        <div className="card-container">
          <AmericanCrew />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Calendar from './components/Calendar';
import CardPage from './components/CardPage';
import BillPage from './components/BillPage';
import Reservation from './components/Reservation'; // Ensure the import is correct
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/card-page" element={<CardPage />} />
          <Route path="/billpage" element={<BillPage />} />
          <Route path="/reservation" element={<Reservation />} /> {/* Add the reservation route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

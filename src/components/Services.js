import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Services.css';
import haircut from '../Assets/haircut.jpg';
import hairwash from '../Assets/hairwash.jpg';
import Manicure from '../Assets/manicure.jpg';
import hairspa from '../Assets/hairspa.jpg';
import shaving from '../Assets/shaving.jpg';
import pedicure from '../Assets/pedicure.jpg';
import facial from '../Assets/facial.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaLocationDot } from "react-icons/fa6";

const Services = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { salonType, salonName, logo, image } = location.state || {};
    const [selectedService, setSelectedService] = useState('');
    const [filteredServices, setFilteredServices] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        gender: '',
        date: '',
        slot: '',
        service: '',
        price: '',
        salonName: salonName || '',
        location: '',
    });
    const [defaultLocation, setDefaultLocation] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);

    useEffect(() => {
        filterServices(salonType);

        // Set default location and filtered locations based on salonType
        let defaultLocationValue = '';
        let locationsArr = [];
        switch (salonType) {
            case 'men':
                defaultLocationValue = 'Madhapur';
                locationsArr = ['Madhapur', 'Gachibowli', 'Banjara Hills']; // Example locations
                break;
            case 'women':
                defaultLocationValue = 'Kondapur';
                locationsArr = ['Kondapur', 'Hitech City', 'Jubilee Hills']; // Example locations
                break;
            case 'both':
                defaultLocationValue = 'Sainikpuri';
                locationsArr = ['Sainikpuri', 'Secunderabad', 'Begumpet']; // Example locations
                break;
            default:
                defaultLocationValue = '';
                locationsArr = [];
                break;
        }
        setDefaultLocation(defaultLocationValue);
        setFilteredLocations(locationsArr);
    }, [salonType]);

    const filterServices = (salonType) => {
        let filtered;
        switch (salonType) {
            case 'men':
                filtered = servicesData.filter((service) => service.id >= 1 && service.id <= 3);
                break;
            case 'women':
                filtered = servicesData.filter((service) => service.id >= 4 && service.id <= 7);
                break;
            case 'both':
                filtered = servicesData;
                break;
            default:
                filtered = servicesData;
                break;
        }
        setFilteredServices(filtered);
    };

    const handleDropdownChange = (event) => {
        setSelectedService(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const servicesData = [
        { id: 1, title: 'Haircut', description: 'Get a trendy haircut from our professional stylists.', price: 150, image: haircut },
        { id: 2, title: 'Shaving and Face Massage', description: 'Enjoy a soothing shaving and face massage session.', price: 250, image: shaving },
        { id: 3, title: 'Hairwash', description: 'Treat your hair with a rejuvenating hairwash session.', price: 200, image: hairwash },
        { id: 4, title: 'Pedicure', description: 'Treat your feet with a rejuvenating pedicure session.', price: 200, image: pedicure },
        { id: 5, title: 'Manicure', description: 'Pamper yourself with a relaxing manicure session.', price: 180, image: Manicure },
        { id: 6, title: 'Facial', description: 'Rejuvenate your skin with our facial treatments.', price: 300, image: facial },
        { id: 7, title: 'Hair Spa', description: 'Relax with our nourishing hair spa services.', price: 350, image: hairspa },
    ];

    const handleBookSlot = (service, price, location) => {
        const updatedBookingDetails = {
            ...bookingDetails,
            service,
            price,
            location: location || defaultLocation,
        };

        // Store the updated booking details in sessionStorage
        sessionStorage.setItem('bookingDetails', JSON.stringify(updatedBookingDetails));

        // Navigate to the Calendar component
        navigate('/calendar');
    };

    return (
        <>
            {/* <Header /> */}
            <section id="services">
                {logo && <img src={logo} alt={salonName} className="salon-logo" />}
                <h1>{salonName ? salonName + ' Services' : 'Salon Services'}</h1>
                {image && <img src={image} alt="Salon Specific" className="salon-specific-image" />}
                <div className="dropdown-container">
                    <select id="serviceDropdown" value={selectedService} onChange={handleDropdownChange}>
                        {salonType === 'men' && <option value="Regis salon">Only for Men</option>}
                        {salonType === 'women' && <option value="American Crew">Only for Women</option>}
                        {salonType === 'both' && <option value="Tony & Guy">For both Men and Women</option>}
                    </select>
                    <FaLocationDot style={{ fontSize: '30px', position: 'absolute', left: '-30px',top:'7px' }} />
                    <div className="location">
                       
                    <span style={{position:'absolute',right:'50px',margin:'10px',top:'-5px',fontSize:'25px'}}>Saloon Location</span> 
                     <select
                            value={bookingDetails.location || defaultLocation}
                            onChange={(event) => {
                                setBookingDetails((prevDetails) => ({
                                    ...prevDetails,
                                    location: event.target.value,
                                }));
                                setSelectedLocation(event.target.value);
                            }}
                        >
                            {filteredLocations.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="services-container">
                    {filteredServices.map((service) => (
                        <div key={service.id} className="service-card">
                            <img src={service.image} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <p>
                                <strong>Price:</strong> ₹{service.price}
                            </p>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => handleBookSlot(service.title, service.price, bookingDetails.location)}
                            >
                                Book Slot
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
};

export default Services;

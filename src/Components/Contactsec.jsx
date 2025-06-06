import React, { useState } from 'react';
import '../assets/css/About.css';
import Footernew from '../Components/Footer';

const Contactsec = () => {
  const [text, setText] = useState('Contact Page');

  return (
    <>
        <div className="contact-container">
        {/* Left Side Image */}
        <div className="contact-left">
            <img 
            src="https://quanutrition.com/wp-content/uploads/2024/01/Contact-Us-3.png" 
            alt="Contact" 
            className="contact-image"
            />
        </div>

        {/* Right Side Contact Form */}
        <div className="contact-right">
            <h1>{text}</h1>
            <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
            </form>
        </div>
        </div>
        <Footernew />
    </>
  );
};

export default Contactsec;

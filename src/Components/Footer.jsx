import React from 'react';
import '../assets/css/Footer.css'; // Make sure this file path matches your project structure
import { IonIcon } from 'react-ion-icon';
import Zebralogo from '../assets/images/zebra-elevation1.png'

const Footer = () => {
  return (
    <footer className="footer">

      <ul className="footer__nav">
        <li className="nav__item">
          <a href="#">
            <img src={Zebralogo} alt="Tourly logo" style={{ width: "120px", height: "auto" }} />
          </a>
        </li>

        <li className="nav__item">
          <p>
            We specialize in high-quality ACP cladding services that elevate the look and durability of your buildings.
            From sleek modern facades to weather-resistant installations, trust us for precision and professionalism.
          </p>
        </li>

        <li className="nav__item nav__item--extra">
          <h4 className="contact-title">Contact Us</h4>
          <p className="contact-text">Feel free to contact and reach us !!</p>
          <p className="contact-text"><b style={{ fontWeight: 800 }}>Zebra sign world</b></p>
          <ul className="nav__ul nav__ul--extra">
            <li>
              <IonIcon name="call-outline" />
              <a href="tel:+01123456790" className="contact-link">+91 98430 99624 | +91 88071 99880</a>
            </li>
            <li>
              <IonIcon name="mail-outline" />
              <a href="mailto:zebrasignworld@gmail.com" className="contact-link">zebrasignworld@gmail.com</a>
            </li>
            <li>
              <IonIcon name="location-outline" />
              <span>15A1, Subbiyan Layout Ramanathapuram Coimbatore - 641 - 045.</span>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <p className="form-text">Subscribe our newsletter for more update & news !!</p>
          <form className="form-wrapper" onSubmit={(e) => e.preventDefault()}>
            <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required />
            <button type="submit" className="btn btn-secondary subscribe">Subscribe</button>
          </form>
        </li>
      </ul>

      <div className="legal">
        <p className="copyright">
          &copy; 2024 &nbsp; <a href="#">Zebra sign world</a>. All rights reserved
        </p>
        <ul className="footer-bottom-list">
          <li><a href="#" className="footer-bottom-link">Privacy Policy</a></li>
          <li><a href="#" className="footer-bottom-link">Term & Condition</a></li>
          <li><a href="#" className="footer-bottom-link">FAQ</a></li>
        </ul>
      </div>

      <a href="#top" className="go-top" data-go-top>
        <IonIcon name="chevron-up-outline" />
      </a>
    </footer>
  );
};

export default Footer;

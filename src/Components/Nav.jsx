import React, { useState, useEffect } from 'react';
import { Carousel, Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css';
import Logo from '../assets/images/zebra-elevation1.png';
import { Link } from 'react-router-dom';
import Carouselfir from '../assets/images/HPL.jpg'


function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setShowHeader(currentScrollPos === 0);
    setIsScrolled(currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {showHeader && (
      <header className="top-header d-flex justify-content-between align-items-center px-4 py-2 text-white">
        <img src={Logo} alt="Zebra Logo" />
        <div>
          <b>+91 88071 99880 | +91 98430 99624</b>
        </div>
      </header>
    )}

    <Navbar expand="lg" className={`main-navbar py-3 ${isScrolled ? 'navbar-scrolled shadow fixed-top' : ''}`}>
      <Container>
        <div className="d-flex align-items-center me-3 social-logo-group">
          {isScrolled ? (
            <img src={Logo} alt="Zebra Logo" className="navbar-logo" />
          ) : (
            <>
              <a href="#" className="text-white ms-3 me-3"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </>
          )}
        </div>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/About">About</Link>
            <Link className='nav-link' to="/Project">Project</Link>
            <Link className='nav-link' to="/Service">Service</Link>
            <Link className='nav-link' to="/Contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="light" className="rounded-pill">Get in Touch</Button>
      </Container>
    </Navbar>


      {/* Carousel */}
      <div className="carousel-wrapper">
        <Carousel fade controls indicators>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Carouselfir}
              alt="Slide 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.alstoneindia.com/sites/default/files/2024-03/LOUVERS.jpg"
              alt="Slide 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.alstoneindia.com/sites/default/files/2024-03/Zinc-final.webp"
              alt="Slide 3"
            />
          </Carousel.Item>
        </Carousel>
       
      </div>
       
    </>
  );
}

export default App;

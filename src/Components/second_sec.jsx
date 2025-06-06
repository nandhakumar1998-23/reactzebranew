import React from 'react';
import '../assets/css/second_sec.css'; // Make sure to create this CSS file
import About from '../assets/images/about-img.avif';


const SecondSec = () => {
  return (
    <section className="tour-search">
      <div className="container new-layout">
        <div className="left-content">
          <h1 className="title">What we</h1>
          <p className="desc">
            Zebra Sign World is passionate about creating striking visual solutions to elevate your
            brand with our precise ACP cladding work in Coimbatore and all over South India. By focusing on
            high-quality ACP cladding services and innovative LED signage, we transform spaces and enhance brand
            visibility. Our dedicated team work with combined creativity and expertise to deliver custom designs
            tailored to your unique needs.
          </p>
          <a href="./assets/images/zebra.pdf" className="download-btn" download>
            Download Brochure
          </a>
        </div>
        <div className="right-content">
          <img src={About} alt="Download Brochure"className="tour-image"/>
        </div>
      </div>
    </section>
  );
};

export default SecondSec;

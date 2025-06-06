// src/components/Four.jsx
import React from 'react';
import '../assets/css/Four.css';
import Core from '../assets/images/core.jpg'
import Secimg from '../assets/images/sec-img.png'
import Thirdimg from '../assets/images/third-img.png'

const Four = () => {
  return (
    <section className="package" id="package">
      <div className="container">
        <h2 className="h2 section-title">Explore Highlights</h2>

        <p className="section-text">
          Explore our commitment to excellence through advanced ACP cladding and premium LED signage. Designed for longevity and style, our solutions meet the unique needs of every residential, commercial, or industrial project.
        </p>

        <ul className="package-list">
          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src="https://envitect.com/wp-content/uploads/2024/04/Banner-4.webp" alt="Experience The Great Holiday On Beach" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Why Choose Zebra sign world?</h3>
                <p className="card-text">
                  As a top provider of ACP cladding in Coimbatore, we specialize in high-quality ACP cladding and LED signage, prioritizing craftsmanship and customer satisfaction to bring your unique vision to life.
                </p>
              </div>
              <div className="card-price">
                <img src="https://cdn-icons-png.flaticon.com/128/7512/7512242.png" alt="Card Image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src="https://www.hubspot.com/hubfs/company-mission-statements_9.webp" alt="Summer Holiday To The Oxolotan River" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Vision and Mission</h3>
                <p className="card-text">
                  To provide a remarkable design that perfectly reflects your vision in reality. We focus on delivering exceptional ACP Cladding work with remarkable ACP sheet that elevate your brand with quality and providing the best support.
                </p>
              </div>
              <div className="card-price">
                <img src={Secimg} alt="Card Image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </li>

          <li style={{ listStyle: 'none' }}>

            <div className="package-card">
              <figure className="card-banner">
                <img src={Core} alt="Santorini Island's Weekend Vacation" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Values</h3>
                <p className="card-text">
                  We prioritize integrity and sustainability and build trust while reducing our environmental impact. Our dedication helps us to continuously improve and deliver exceptional results for our clients in Coimbatore and all over South India.
                </p>
              </div>
              <div className="card-price">
                <img src={Thirdimg} alt="Card Image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Four;

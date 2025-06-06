import React from "react";
import "../assets/css/Six.css";
import Volvo from '../assets/images/images/Volvo.png'
import TVS from '../assets/images/images/TVS1.png'
import CNC from '../assets/images/images/CMC.png'
import FB from '../assets/images/images/FB1.png'
import TG from '../assets/images/images/T__G1.png'


const Six = () => {
  return (
    <section className="acp-cta-section" id="contact">
      <div className="acp-cta-container">
        <div className="acp-cta-content">
          <h2 className="h2 section-title">Valuable Clients</h2>
        </div>

        {/* Client Logo Carousel */}
        <div className="acp-carousel-wrapper">
          <div className="acp-carousel-track">
            <img src={Volvo} alt="Client 1" />
            <img src={TVS} alt="Client 2" />
            <img src={CNC} alt="Client 3" />
            <img src={FB} alt="Client 4" />
            <img src={TG} alt="Client 5" />

            {/* Repeat for smooth loop */}
            <img src={Volvo} alt="Client 1" />
            <img src={TVS} alt="Client 2" />
            <img src={CNC} alt="Client 3" />
            <img src={FB} alt="Client 4" />
            <img src={TG} alt="Client 5" />

            <img src={Volvo} alt="Client 1" />
            <img src={TVS} alt="Client 2" />
            <img src={CNC} alt="Client 3" />
            <img src={FB} alt="Client 4" />
            <img src={TG} alt="Client 5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Six;

import React, { useEffect, useRef } from 'react';
import '../assets/css/Saven.css';
import World from '../assets/images/images/world3.png';

const Saven = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const runCounters = () => {
      countersRef.current.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 100;
        const increment = target / speed;

        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target + "+";
          }
        };

        updateCount();
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounters();
            observer.disconnect(); // run once
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('.acp001-section');
    if (section) {
      observer.observe(section);
    }
  }, []);

  return (
    <>
      <div className="acp-cta-content" style={{ textAlign: 'center' }}>
        <h2 className="h2 section-title">We Welcome International Clients</h2>
      </div>

      <section className="world-center">
        <img src={World} alt="World Map" />
      </section>

      <section className="acp001-section" id="acp-contact">
        <div className="acp001-overlay">
          <div className="acp001-container">
            <div className="acp001-left">
              <div className="acp001-highlight-box">
                <h3
                  className="acp001-counter"
                  data-target="30"
                  ref={el => (countersRef.current[0] = el)}
                >
                  0
                </h3>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="acp001-right">
              <div className="acp001-highlight-box">
                <h3
                  className="acp001-counter"
                  data-target="400"
                  ref={el => (countersRef.current[1] = el)}
                >
                  0
                </h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Saven;

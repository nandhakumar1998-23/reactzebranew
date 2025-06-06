import React from 'react';
import '../assets/css/Five.css'; // Create this file and paste your CSS there
import work1 from '../assets/images/images/work1.jpg';
import work2 from '../assets/images/images/work2.jpg';
import afterImg from '../assets/images/images/after-img.jpg';
import work4 from '../assets/images/images/work4.jpg';
import work5 from '../assets/images/images/work5.JPG';

function Five() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="h2 section-title">Recent Works</h2>

        <p className="section-text">
          Explore our latest ACP cladding projects that combine durability with stunning aesthetics.
          From commercial facades to signage and exterior finishes, our aluminum composite panel
          installations reflect modern architecture with precision and style.
        </p>

        <ul className="gallery-list">
          {[work1, work2, afterImg, work4, work5].map((image, index) => (
            <li className="gallery-item" key={index}>
              <figure className="gallery-image">
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Five;

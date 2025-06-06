import React, { useState } from "react";
import '../assets/css/Nav.css';
import Footernew from '../Components/Footer';
import Processimg from '../assets/images/process1.png'

const images = [
  {
    src: "https://www.zebrasignworld.com/static/images/reimg3.jpeg",
    month: "January"
  },
  {
    src: "https://www.zebrasignworld.com/static/images/reimg1.jpeg",
    month: "February"
  },
  {
    src: "https://www.zebrasignworld.com/static/images/reimg5.jpeg",
    month: "March"
  },
  {
    src: "https://www.zebrasignworld.com/static/images/reimg6.JPG",
    month: "April"
  },
  {
    src: "https://www.zebrasignworld.com/static/images/reimg4.jpeg",
    month: "May"
  },
  {
    src: "https://www.zebrasignworld.com/static/images/reimg7.jpg",
    month: "June"
  },
  {
    src: "https://www.zebrasignworld.com/static/images/reimg2.jpeg",
    month: "July"
  },
  {
    src: "https://www.zebrasignworld.com/images/images/20241210062220IMG_1281.JPG",
    month: "August"
  },
];

const logosRow1 = [
  { src: "https://www.zebrasignworld.com/images/images/20241211054347ganga1_1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054513FB1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211051755CMC.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211052225L__T.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054741T__G1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054750TVS1.png" },
   { src: "https://www.zebrasignworld.com/images/images/20241211052319volvo.png" },
];

const logosRow2 = [
  { src: "https://www.zebrasignworld.com/images/images/20241211054347ganga1_1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054513FB1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211051755CMC.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211052225L__T.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054741T__G1.png" },
  { src: "https://www.zebrasignworld.com/images/images/20241211054750TVS1.png" },
   { src: "https://www.zebrasignworld.com/images/images/20241211052319volvo.png" },
];


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
   <>
      <div className="gallery-container">
        <h2 className="gallery-title">Image Gallery</h2>
        <div className="grid-gallery">
          {images.map((img, index) => (
            <div key={index} className="grid-item" onClick={() => setSelectedImage(img.src)}>
              <img src={img.src} alt={`Gallery ${index}`} className="grid-img" />
              <div className="overlay">
                <span className="month-label">{img.month}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Full view" className="fullscreen-img" />
          </div>
        )}
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper">
        {/* First Row - Left to Right */}
        <div className="marquee left-to-right">
          {[...logosRow1, ...logosRow1].map((logo, index) => (
            <img key={index} src={logo.src} alt={`Logo ${index}`} className="marquee-logo" />
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="marquee right-to-left">
          {[...logosRow2, ...logosRow2].map((logo, index) => (
            <img key={index} src={logo.src} alt={`Logo ${index}`} className="marquee-logo" />
          ))}
        </div>
      </div>
      <div className="Process">
          <img src={Processimg} alt="" />
      </div>
      <Footernew />
   </>
  );
}

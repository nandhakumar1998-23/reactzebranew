import React, { useRef, useEffect, useState } from 'react';
import '../assets/css//third-sec.css'; // make sure this CSS file is created
import beforeImageSrc from '../assets/images/2.jpg';
import afterImageSrc from '../assets/images/1.jpg';

const ThirdSec = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const imgFilterRef = useRef(null);
  const afterImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const moveSlider = (x) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const position = Math.max(0, Math.min(x - rect.left, container.offsetWidth));

    imgFilterRef.current.style.width = `${position}px`;
    sliderRef.current.style.left = `${position}px`;
    afterImageRef.current.style.clip = `rect(0, ${position}px, 400px, 0)`;
  };

  useEffect(() => {
    const container = containerRef.current;
    const center = container.offsetWidth / 2;

    imgFilterRef.current.style.width = `${center}px`;
    sliderRef.current.style.left = `${center}px`;
    afterImageRef.current.style.clip = `rect(0, ${center}px, 400px, 0)`;

    const handleMouseMove = (e) => {
      if (isDragging) moveSlider(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (isDragging) moveSlider(e.touches[0].clientX);
    };

    const stopDragging = () => setIsDragging(false);

    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchend', stopDragging);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchend', stopDragging);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  const handleBefore = () => {
    const width = containerRef.current.offsetWidth;
    imgFilterRef.current.style.width = `${width}px`;
    sliderRef.current.style.left = `${width}px`;
    afterImageRef.current.style.clip = `rect(0, ${width}px, 400px, 0)`;
  };

  const handleAfter = () => {
    imgFilterRef.current.style.width = `0px`;
    sliderRef.current.style.left = `0px`;
    afterImageRef.current.style.clip = `rect(0, 0px, 400px, 0)`;
  };

  return (
    <section className="compare-section">
      <div className="container">
        <div className="image-compare" ref={containerRef}>
          <img src={beforeImageSrc} alt="Before" className="before-image" />
          <img
            src={afterImageSrc}
            alt="After"
            className="after-image"
            ref={afterImageRef}
          />
          <div className="img-filter" ref={imgFilterRef}></div>
          <div
            className="slider"
            ref={sliderRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5166/5166150.png"
              alt="Slider Icon"
            />
          </div>
        </div>

        <div className="buttons">
          <button className="btn-left" onClick={handleBefore}>
            Before
          </button>
          <button className="btn-right" onClick={handleAfter}>
            After
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThirdSec;

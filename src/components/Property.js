import React, { useState, useEffect, useRef } from 'react';
import './Property.css'; // Ensure you have this CSS file for styling

const PropertyDetails = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageIndex1, setImageIndex1] = useState(0);
  const [imageIndex2, setImageIndex2] = useState(0);
  const images = [
    '/Floorplan1.jpg',
    '/Floorplan2.jpg',
    '/Floorplan1.jpg',
    '/Floorplan2.jpg',
  ]; // Additional images array

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex1((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image in box 1 every 3 seconds

    const interval2 = setInterval(() => {
      setImageIndex2((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image in box 2 every 4 seconds

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [images.length]);

  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    sliderRef.current.style.left = `${offsetX}px`;
    containerRef.current.querySelector('.day-image').style.width = `${offsetX}px`;
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="property-details">
      <div className="text-section">
        <div className="header" style={{ width: '30%', marginLeft: '10%' }}>
          <span>ABOUT THE PROPERTY</span>
          <div className="line"></div>
        </div>
        <h1 style={{ fontSize: '70px', fontWeight: '200', marginLeft: '-18%', marginTop: '-3%' }}>
          Onecent O'live
        </h1>
        <p style={{ textAlign: 'justify', width: '60%', marginLeft: '10%', marginTop: '-5%' }}>
          Explore the epitome of modern living at Onecent Olive. These stylish 2BHK apartments in Phase 4, Vanastalipuram,
          boast a five-floor elevation design characterized by clean lines, sleek façade, and contemporary architectural
          style. Enjoy panoramic views and ample natural light, harmoniously blending modern materials like concrete,
          steel, and glass, creating a sophisticated and visually striking aesthetic.
        </p>
        <p style={{ marginLeft: '10%', width: '60%', textAlign: 'justify' }}>
          Onecent Olive is a testament to the harmonious fusion of functionality and cutting-edge design.
        </p>
        <button style={{ marginLeft: '-50%', paddingTop: '2%', paddingBottom: '2%' }}>DOWNLOAD BROCHURE</button>
        <div className="floor-plan-header" style={{ marginLeft: '10%', marginTop: '3%', fontWeight: '500' }}>
          Floor Plans
        </div>
        <div className="images-section" style={{ display: 'flex', marginLeft: '10%' }}>
          <div style={{ flex: 1 }}>
            <img
              key={imageIndex1} // Adding key prop to force re-render
              src={images[imageIndex1]}
              alt={`Image ${imageIndex1 + 1}`}
              className="image image-slide-in"
              style={{ marginBottom: '10px' }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <img
              key={imageIndex2} // Adding key prop to force re-render
              src={images[imageIndex2]}
              alt={`Image ${imageIndex2 + 1}`}
              className="image image-slide-in"
              style={{ marginBottom: '10px' }}
            />
          </div>
        </div>
      </div>

      <div className="image-comparison-container" ref={containerRef} style={{marginLeft:"5%",marginTop:"%"}}>
        <img src={`${process.env.PUBLIC_URL}/dayview.png`} alt="Day View" className="day-image" />
        <img src={`${process.env.PUBLIC_URL}/nightview.png`} alt="Night View" className="night-image" style={{width:"100%"}} />
        <div className="slider" ref={sliderRef} onMouseDown={handleMouseDown}>
          <div className="arrow left-arrow">&#9664;</div>
          <div className="arrow right-arrow">&#9654;</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

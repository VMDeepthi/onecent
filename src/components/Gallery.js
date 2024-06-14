import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  { src: 'image1.jpg', name: 'PRIME LOCATION' },
  { src: 'image2.jpg', name: 'MODERN ELEGANCE' },
  { src: 'image3.jpg', name: 'PREMIUM QUALITY' },
  { src: 'image4.avif', name: 'LUXURY' },
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="gallery">
      <div className="gallery-headings" style={{marginTop:"%"}}>
        <p style={{color:"white"}}>-------------WHY ONECENT-------------</p>
        <h2 style={{fontSize:"35px",fontFamily:"Roboto"}}>Because Luxury Should Be Accessible</h2>
      </div>

      {images.map((image, index) => (
        <div
          key={index}
          className={`gallery-item ${hoveredIndex === index ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{marginTop:"1%"}}
        >
          <img src={image.src} alt={image.name} />
          <div className="image-overlay">
            <span>{image.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

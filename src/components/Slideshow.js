import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
    const images = [
        `${process.env.PUBLIC_URL}/floorplan1.webp`,
        `${process.env.PUBLIC_URL}/floorplan2.webp`,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            <img src={images[currentImageIndex]} alt="Slideshow" className="slideshow-image"  />
        </div>
    );
};

export default Slideshow;

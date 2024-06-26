import React, { useState, useEffect } from 'react';
import './Home.css';
import Footer from './Footer'; // Import the Footer component
import Aboutfounder from './Aboutfounder';
import PropertySection from './PropertySection';
import Ongoingproject from './Ongoingproject';
import TestimonialSection from './ClientTestimonials';
import Gallery from './Gallery';
import Property from './Property';
import useIntersectionObserver from './useIntersectionObserver';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useIntersectionObserver(setIsVisible);

  const images = [
    `${process.env.PUBLIC_URL}/image2.avif`,
    `${process.env.PUBLIC_URL}/image3.jpg`
  ];

  useEffect(() => {
    // Trigger animation after a delay (adjust timing as needed)
    const timeout = setTimeout(() => {
      setAnimateText(true);
    }, 500);
  
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" className="logo" />
      <div className="text-container" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <h1 style={{ fontSize: "50px", marginTop: '10%' }} className={animateText ? 'animate-reveal' : ''}>Welcome to</h1>
<h1 style={{ fontSize: "90px", fontWeight: "400", marginTop: '-1%' }} className={animateText ? 'animate-reveal' : ''}>Onecent Homes</h1>
<h1 style={{ fontSize: "20px" }} className={animateText ? 'animate-reveal' : ''}>Where luxury meets affordability</h1>
        <button style={{ marginBottom: "1%", paddingLeft: "2%", paddingRight: "2%", paddingTop: "1.5%", paddingBottom: "1.5%" }} className='DOWNLOAD'>DOWNLOAD BROCHURE</button>
      </div>
      <div className="projects-container">
        <div className="projects-header" style={{marginTop:"10%"}}>
          <p>PROJECTS WORKED</p>
          <hr />
        </div>
        <div className="project">
          <img className="img" src={`${process.env.PUBLIC_URL}/PROJECT1.jpg`} alt="Project 1" />
          <div className="project-info">
            <p className='heading'>ONECENT ORCHAD</p>
            <p>ELEGANT 3BHKS IN HANUMAN NAGAR, KHARMANGATH, REDEFINING LUXURY WITH SPACIOUS LIVING AT 1520 SQFT.</p>
            <button>CHECK NOW</button>
          </div>
        </div>
        <div className="project">
          <img className="img" src={`${process.env.PUBLIC_URL}/project2.jpg`} alt="Project 2" />
          <div className="project-info">
            <p className='heading'>ONECENT O'LIVE</p>
            <p>STYLISH 2BHKS IN PHASE 4, VANASTALIPURAM, OFFERING MODERN LIVING WITH THE PERFECT BLEND OF COMFORT AND CONVENIENCE AT 1175 SQFT.</p>
            <button>CHECK NOW</button>
          </div>
        </div>
        <div className="project">
          <img className="img" src={`${process.env.PUBLIC_URL}/project3.webp`} alt="Project 3" />
          <div className="project-info">
            <p className='heading'>ONECENT OORJA</p>
            <p>VERSATILE 2BHK AND 3BHK APARTMENTS IN MEERPET, RANGING FROM 1200 SQFT TO 1650 SQFT, ENSURING A HARMONIOUS BLEND OF SPACE AND LUXURY.</p>
            <button>CHECK NOW</button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
  <div className="about-container" style={{ marginTop: '10%', marginLeft: '3%', width: '65%' }}>
    <div className="about-header">
      <p>ABOUT US</p>
      <hr />
    </div>
    <div className="about-content">
      <h2 style={{ fontSize: '28px', display: 'flex',width:"100%" }}>
        Experience we sold over <span style={{ marginLeft: '10px' }}>the decade</span>
      </h2>
    </div>
    <div style={{ width: '74.5%', textAlign: 'justify' }}>
      <p>
        At Onecent homes, our story began on the west side of Hyderabad in 2020, marking the inception of a brand
        committed to redefining luxury living. Since our humble start, we have grown exponentially, expanding our
        horizons and achieving a remarkable 4x growth by the year 2023. We offer more than just apartments – a
        lifestyle tailored to your aspirations. Each residence is crafted with meticulous attention, adhering to
        Vastu principles for a harmonious living experience. We’re committed to bringing luxury living at an
        affordable cost without compromising quality.
      </p>
      <p>Start your journey at Onecent, where affordability meets quality, and comfort meets style.</p>
      <button style={{backgroundColor:"black",color:"white",paddingTop:"3.5%",paddingBottom:"3.5%",width:"40%",marginTop:"3%",fontWeight:"400"}} >REQUEST QUERY</button>
    </div>
  </div>
  <img className='about-us-img' src={`${process.env.PUBLIC_URL}/aboutus.webp`} alt="About Us Image" style={{ width: '58%', height: '58%',marginTop:"10%",marginRight:"5%",marginLeft:"-5%" }} />
    </div>
    <div>
      <PropertySection />
    </div>
    <div>
      <Property />
    </div>
   <div>
    <Ongoingproject />
   </div>
    <div>
          <Aboutfounder />
        </div>
        <div>
          <TestimonialSection />
         
        </div>
        <div>
          <Gallery />
        </div>
    <div className="container" style={{marginTop:"5%"}}>
            <div className="left-section">
                <p style={{marginLeft:"2%"}}>HAVE QUESTIONS OR NEED PERSONALIZED GUIDANCE</p>
                <h2 style={{marginLeft:"-2.5%",fontSize:"30px"}}>Our team of experts is here to assist you</h2>
                <p style={{marginLeft:"1.5%"}}>Whether it’s about finding the perfect floor plan, understanding our amenities, or exploring financing options, we’re here for you.</p>
            </div>
            <div className="right-section" style={{marginTop:"-2%"}}>
                <input type="text" placeholder="NAME" className="input-field" />
                <input type="text" placeholder="EMAIL" className="input-field" />
                <input type="text" placeholder="PHONE WITH COUNTRY CODE" className="input-field" />
                <button type="submit" className="submit-button" style={{paddingTop:"3%",paddingBottom:"3%",marginTop:"2%"}}>SUBMIT REQUEST</button>
            </div> 
        </div>   
  <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" className="logo" />
  <hr style={{width:"90%"}} /> {/* Add horizontal line here */}
        <Footer />

    </div>
  
  );
}

export default Home;

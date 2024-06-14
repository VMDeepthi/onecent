import React, { useState, useEffect } from 'react';
import './ClientTestimonials.css';

const testimonials = [
  { text: "The best decision I've made was choosing Onecent Home. The community, the environment, and the homes are all fantastic.", author: "Mr.Rohit" },
  { text: "Onecent Home's attention to detail is exceptional. From the modern amenities to the quality construction, everything is top-notch.", author: "Mr.Rohit" },
  { text: "Onecent Home has redefined luxury living for me. The contemporary design and spacious layout make it a perfect home for my family.", author: "Mr.Virat" },
  { text: "Onecent Home's attention to detail is exceptional. From the modern amenities to the quality construction, everything is top-notch.", author: "Mr.Dhoni" },
];

const ClientTestimonials = () => {
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(1);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrent1((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds for first box

    const interval2 = setInterval(() => {
      setCurrent2((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds for second box

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="testimonials-container" style={{paddingTop:"5%",paddingBottom:"8%"}} >
      <div className="what-our-clients-say">
      <p style={{fontFamily:"Roboto"}}>TESTIMONIALS</p>
        <h2 style={{fontSize:"22px",fontFamily:"Roboto"}}>What our clients said about Onecent Homes</h2>
        
      </div>
      <div className="client-testimonials">
        <div className="testimonial-box">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`slide ${index === current1 ? 'active' : ''}`}>
              
              <p style={{marginTop:"10%",textAlign:"justify",width:"90%",marginLeft:"5%"}}>"{testimonial.text}"</p>
              <p style={{marginLeft:"-70%",marginTop:"5%",fontFamily:"Roboto",fontWeight:"600"}}>{testimonial.author}</p>
              <p style={{marginLeft:"-65%",fontSize:"12px",fontWeight:"600"}}>Onecent Olive</p>
            </div>
          ))}
        </div>
        <div className="testimonial-box">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`slide ${index === current2 ? 'active' : ''}`}>
             
              <p style={{marginTop:"10%",textAlign:"justify",width:"90%",marginLeft:"5%"}}>"{testimonial.text}"</p>
              <p style={{marginLeft:"-70%",marginTop:"5%",fontFamily:"Roboto",fontSize:"20px"}}>{testimonial.author}</p>
              <p style={{marginLeft:"-65%",fontSize:"12px",fontWeight:"600",marginTop:"-2.5%"}}>Onecent Orchad</p>
            </div>
            
          ))}
          
        </div>
       
      </div>
    </div>
  );
};

export default ClientTestimonials;

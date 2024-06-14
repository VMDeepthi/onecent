// ProjectSection.js

import React from 'react';
import './Ongoingproject.css'; // Import your CSS file

const ProjectSection = () => {
  return (
    <div className="project-section">
      <div className="image-container">
        <img src="/ongoingproject.webp" alt="Ongoing Project"  style={{width:"80%",marginTop:"10%",marginLeft:"5%",borderRadius:"20px",height:"400px"}}/>
      </div>
      <div className="content" style={{height:"300px",marginTop:"-5%"}}>
        <p style={{marginLeft:"-70%"}}>Ongoing Project</p>
        <h2 style={{fontSize:"45px",marginLeft:"-45%",marginTop:"-2%",fontWeight:"400"}}>Onecent Oorja</h2>
        <p style={{textAlign:"justify",width:"80%",marginLeft:"6%",marginTop:"-3%"}}>
        Discover timeless elegance at Onecent Oorja in Meerpet. With area options ranging from 1200 sqft to 1650 sqft, these 2BHK and 3BHK apartments present a classic design that evokes a sense of enduring sophistication. Immerse yourself in the charm of refined details, ensuring a perfect harmony of space and luxury.
        </p>
        <p style={{textAlign:"justify",width:"80%",marginLeft:"6%"}}>
        Onecent Oorja invites you to experience the distinctive allure of a classic look and feel, where every aspect resonates with timeless beauty.
        </p>
        <button style={{padding:"2% 5% 2% 5%",marginLeft:"-55%",backgroundColor:"black",color:"white",fontWeight:"600",marginTop:"5%",border:"none"}}>CONTACT FOR MORE</button>
      </div>
    </div>
  );
};

export default ProjectSection;

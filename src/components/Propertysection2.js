import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Propertysection2.css'; // Import the CSS file for styling


const PropertySection = () => {
    return (
        <div className="property-section-container">
            <div className="hr-text" style={{ marginTop: "10%" }}>
                <h2 style={{ marginLeft: "-305%", fontSize: "14px", fontWeight: "200" }}>ABOUT THE PROPERTY</h2>
                <hr style={{ width: "40px", marginLeft: "-40%" }} />
            </div>
            <div className="property-info">
                <div className="property-text">
                    <h3 style={{ fontSize: "40px", color: "white", marginLeft: "-48%", marginTop: "-0.5%" }}>Onecent Orchad</h3>
                    <p style={{ textAlign: "justify", color: "white", fontFamily: "Roboto", marginTop: "-5%", fontSize: "18px" }}>
                        Step into the future with Onecent Orchard’s ultra-modern glass front elevation design. These contemporary 3BHK apartments in Hanuman Nagar, Kharmangath, redefine luxury living at 1520 sqft. Experience the seamless connection between indoor and outdoor spaces, creating an airy, modern ambiance reminiscent of a super cool art gallery. The sleek lines and large glass panels bring a touch of sophistication, making these homes a perfect blend of art and contemporary design.
                    </p>
                    <button style={{ marginLeft: "-65%", paddingTop: "3%", paddingBottom: "3%", paddingLeft: "3%", paddingRight: "3%", fontWeight: "400" }}>
                        DOWNLOAD BROCHURE
                    </button>
                    <div className="floor-plans">
                        <h2 style={{ color: "white", marginLeft: "1%", marginTop: "5%", fontSize: "35px", fontFamily: "Roboto" }}>Floor Plans</h2>
                        <FontAwesomeIcon icon={faArrowRight} className="fa-arrow-right-icon" />
                        <hr className="floor-plans-line" style={{ marginTop: "8%" }} />
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default PropertySection;

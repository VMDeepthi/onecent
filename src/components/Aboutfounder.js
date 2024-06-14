import React from 'react';
import './AboutFounder.css'; // Import the CSS file for styling

const AboutFounder = () => {
    return (
        <div className="about-founder-container">
            <div className="hr-text">
                <span className="hr-line"></span>
                <p>ABOUT THE FOUNDERS</p>
                <span className="hr-line"></span>
            </div>
            <div className="founder-info">
                <h2 style={{textAlign:"center",fontSize:"40px"}}>How Onecent Started</h2>
                <p style={{textAlign:"justify"}}>Onecent Homes is the brainchild of three visionary directors – Sai Krishna Cheripally, Sukumar Suppala, and Anirudh Konijeti. United by a family background deeply rooted in construction and various other businesses, these like-minded individuals embarked on their entrepreneurial venture after gaining valuable insights from working in their respective firms for two years. At the young age of 24, they ignited the spark that is Onecent Homes, driven by a passion to reshape residential construction. With a united commitment, they aim to establish Onecent Homes as a beacon of trust and excellence in the construction landscape of Telangana, delivering quality, affordability, and modern premium homes that stand the test of time.</p>
            </div>
        </div>
    );
};

export default AboutFounder;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: "whitesmoke" }}>
            <div className="logo-container">
                {/* Ensure the correct path to logo.svg */}
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" className="logo" />
            </div>
            <div className="social-media" style={{ marginLeft: "-60%" }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className="legal-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-and-conditions">Terms & Conditions</a>
            </div>
        </footer>
    );
};

export default Footer;

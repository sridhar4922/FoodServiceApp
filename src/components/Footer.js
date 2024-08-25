import React from 'react';
import './footerStyle.css';
import { FaHome, FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
          <h4>
            <FaHome size={20} style={{ color: "#fbf5d9", marginRight: "2rem" }} />
             Chennai, Tamil Nadu - 600 001
             </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fbf5d9", marginRight: "2rem" }} />
              6382960212
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fbf5d9", marginRight: "2rem" }} />
              balahomefoods@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h3>About us</h3>
          <p>At Bala Home Food Service, we provide authentic, freshly prepared South Indian vegetarian and non-vegetarian meals for busy professionals and bachelors near Mahindra Happinest Apartments, ready for pickup and crafted with the highest standards of quality, hygiene, and customer satisfaction.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;

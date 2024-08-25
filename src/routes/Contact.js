import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './ContactPageStyle.css'; // Import the CSS for styling

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Our Office</h3>
            <p>Bala Home Food Service</p>
            <p>123 Main Street, Suite 456</p>
            <p>Chennai, Tamil Nadu, 600001</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>General Inquiries: +91 6382960212</p>
            <p>Support: +91 9876543210</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>balahomefoodservice@gmail.com</p>
          </div>
        </div>
        <div className="map">
          <h3>Visit Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397093.7883493471!2d80.0719423!3d13.0185454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526368e4ff6ca3:0x7dd9993fa555b183!2sMahindra+Happinest+Avadi!5e0!3m2!1sen!2sin!4v1692813456231!5m2!1sen!2sin
"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

import "./AboutContentStyle.css";
import React from 'react';
import { Link } from "react-router-dom";
import plate from "../asset/plate.png";  // Assuming the image is named plate.png

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About Us</h1>
        <p>Welcome to Bala Home Food Service, where we bring the authentic taste of South Indian home-cooked meals to your table. Specializing in both vegetarian and non-vegetarian dishes, our meals are prepared with the freshest ingredients, ensuring a perfect blend of taste and nutrition.</p>
        <p>Located near Mahindra Happinest Apartments, we cater to the needs of busy professionals and bachelors who crave the comfort of homemade food. While we don’t offer delivery, our convenient pickup service ensures you receive your meals fresh and ready to enjoy.</p>
        <p>At Bala Home Food Service, we are committed to quality, hygiene, and customer satisfaction, making us the preferred choice for those who appreciate genuine South Indian cuisine. Whether you're looking for a hearty breakfast, a satisfying lunch, or a wholesome dinner, we’ve got you covered. Experience the warmth of home-cooked meals, just a short trip away.</p>
        <Link to="/contact"> 
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <img src={plate} alt="Plate" />
      </div>
    </div>
  );
}

export default AboutContent;

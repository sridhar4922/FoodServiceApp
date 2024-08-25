import "./HeroimgStyles.css";
import { Link } from 'react-router-dom';
import React from 'react';
import sideleft from "../asset/sideleft.png";
import sidebottom from "../asset/sidebottom.png";
import sidetop from "../asset/sidetop.png";
import bottom from "../asset/bottom.png";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="sideleft" src={sideleft} alt="sideleft" />
        <img className="sidebottom" src={sidebottom} alt="sidebottom" />
        <img className="sidetop" src={sidetop} alt="sidetop" />
        <img className="bottom" src={bottom} alt="bottom" />
      </div>
      <div className="content">
        <h1>Bala Home Food Service</h1>
        <p className="content1">
          Discover the essence of <span className="highlight">homemade cooking</span> with our exceptional food service.
          Whether you're craving traditional <span className="highlight">South Indian flavors</span> or comforting <span className="highlight">home-style meals</span>,
          we deliver the highest quality dishes right to your door in Chennai.
        </p>
        <Link to="/service" className="btn-explore">
          Explore Our Service
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;

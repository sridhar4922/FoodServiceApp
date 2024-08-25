import React from 'react';
import "./workStyle.css";
import MenuCard from "./MenuCard";
import MenuData from "./MenuData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="work-heading">Weekly South Indian Menu</h1>
      <div className="menu-grid">
        {MenuData.map((dayMenu, index) => (
          <MenuCard
            key={index}
            day={dayMenu.day}
            breakfast={dayMenu.meals[0].items}
            lunch={dayMenu.meals[1].items}
            dinner={dayMenu.meals[2].items}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;

import React from 'react';
import "./menuCardStyle.css";

const MenuCard = ({ day, breakfast, lunch, dinner }) => {
  return (
    <div className="menu-card">
      <h2 className="menu-day">{day}</h2>
      <div className="menu-meal">
        <h3>Breakfast</h3>
        <p>{breakfast}</p>
      </div>
      <div className="menu-meal">
        <h3>Lunch</h3>
        <p>{lunch}</p>
      </div>
      <div className="menu-meal">
        <h3>Dinner</h3>
        <p>{dinner}</p>
      </div>
    </div>
  );
}

export default MenuCard;

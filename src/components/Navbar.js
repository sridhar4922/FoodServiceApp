import { Link } from "react-router-dom"
import "./NavbarStyle.css"
import logo from "../asset/logo.png"
 
import { FaBars,FaTimes } from "react-icons/fa"
import React, { useState } from 'react'

const Navbar  = () => {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}> 
    <Link to="/"> 
    <img className="logo" src={ logo } alt="logo" />
    </Link>

    <ul class={ click? "menu active" : "menu"}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Service">Service</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>

    <div className="hamburger" onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color:"#fff" }} />) : (
      <FaBars size={20} style={{color:"#fff" }} />)}
      </div>

  </div>
  )
}

export default  Navbar
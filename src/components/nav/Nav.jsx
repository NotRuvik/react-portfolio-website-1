import React from 'react'
import './nav.css'
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { PiBookOpenTextFill } from "react-icons/pi";
import { RiServiceFill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() =>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <FaUser/></a>
      <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><PiBookOpenTextFill/></a>
      <a href="#services" onClick={() =>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
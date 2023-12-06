import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Akash</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><RiInstagramFill /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ruvik Ltd. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
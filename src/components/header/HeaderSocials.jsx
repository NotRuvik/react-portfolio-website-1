import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" taget="_blank"><FaLinkedin/></a>
        <a href="https://github.com" taget="_blank"><FaGithub/></a>
        <a href="https://instagram.com" taget="_blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";

const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About me </h2> 
     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About " />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 Yr Working</small>
          </article>

          <article className='about__card'>
            <FaUser className='about__icon'/>
            <h5>Clients</h5>
            <small>Anomonous Clients</small>
          </article>

          <article className='about__card'>
            <FaFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>2 projects</small>
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?
          </p>

          <a href="#contact" className='btn btn-primary'>let's Talk</a>
      </div>
     </div>

    </section>
  )
}

export default About
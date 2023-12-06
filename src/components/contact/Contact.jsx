import React from 'react'
import'./contact.css'
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m1q465r', 'template_tiexp89', form.current, 'U33ZDMmucyC01CfyT')
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>abc@gmail.com</h5>
            <a href="mailto:abc@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option" />
            <h4>Messenger</h4>
            <h5>abc</h5>
            <a href="https://m.me/abc" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BiSolidMessageSquareDots className="contact__option" />
            <h4>Whatsapp</h4>
            <h5>abc@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone+919140273118" target="_blank">Send a message</a>
          </article>
        </div>

        {/*END OF Contact Form */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="eamil" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
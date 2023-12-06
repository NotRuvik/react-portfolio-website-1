import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Rohit Panday',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia aliquid velit. Voluptate quisquam tenetur suscipit et aliquid harum voluptatum dolor culpa molestias consequuntur, provident quam asperiores cum, magnam incidunt.'
  },
  {
    avatar: AVTR2,
    name: 'Rohit Panday',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia aliquid velit. Voluptate quisquam tenetur suscipit et aliquid harum voluptatum dolor culpa molestias consequuntur, provident quam asperiores cum, magnam incidunt.'
  },
  {
    avatar: AVTR3,
    name: 'Rohit Panday',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia aliquid velit. Voluptate quisquam tenetur suscipit et aliquid harum voluptatum dolor culpa molestias consequuntur, provident quam asperiores cum, magnam incidunt.'
  },
  {
    avatar: AVTR4,
    name: 'Rohit Panday',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia aliquid velit. Voluptate quisquam tenetur suscipit et aliquid harum voluptatum dolor culpa molestias consequuntur, provident quam asperiores cum, magnam incidunt.'
  },
]
const Testimonials = () => {
  return (
    <section id='testmonials'>
      <h5>Review from clients</h5>
      <h2>Testominals</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className="client__avatar">
                  <img src={avatar} />
                 </div>
                 <h5 className='client__name'>{name}</h5>
                 <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
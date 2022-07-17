import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Car from '../../images/database/tags/car.jpeg'
import Fashion from '../../images/database/tags/fashion.jpg'
import Sports from '../../images/database/tags/sports.jpeg'
import Tech from '../../images/database/tags/technology.jpg'

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';

function Tags() {
  return (
    <div className="py-10 max-w-[1200px] mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={10}
          pagination = {true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={Car}/></SwiperSlide>
          <SwiperSlide><img src={Fashion}/></SwiperSlide>
          <SwiperSlide><img src={Sports}/></SwiperSlide>
          <SwiperSlide><img src={Tech}/></SwiperSlide>
          <SwiperSlide><img src={Car}/></SwiperSlide>
          <SwiperSlide><img src={Fashion}/></SwiperSlide>
          <SwiperSlide><img src={Sports}/></SwiperSlide>
          <SwiperSlide><img src={Tech}/></SwiperSlide>
          <SwiperSlide><img src={Car}/></SwiperSlide>
          <SwiperSlide><img src={Fashion}/></SwiperSlide>
          <SwiperSlide><img src={Sports}/></SwiperSlide>
          <SwiperSlide><img src={Tech}/></SwiperSlide>
          <SwiperSlide><img src={Car}/></SwiperSlide>
          <SwiperSlide><img src={Fashion}/></SwiperSlide>
          <SwiperSlide><img src={Sports}/></SwiperSlide>
          <SwiperSlide><img src={Tech}/></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Tags
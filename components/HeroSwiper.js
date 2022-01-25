import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { nanoid } from 'nanoid';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const HeroSwiper = (props) => {
  const images = [];

  for (let i = 0; i < Object.keys(props).length; i++) {
    images.push(props[`${i}`].fields.file)
  }

  return (
    <div className='hero-swiper'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          "clickable": true
        }}
        loop={true}
        wrapperTag='ul'
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {images.map((image) => (
          <SwiperSlide tag='li' key={nanoid()}> <Image src={`https:${image.url}`} priority layout='responsive' width={1200} height={500} alt={image.fileName} /></SwiperSlide>
        ))}
      </Swiper>
    </div >
  )
}

export default HeroSwiper

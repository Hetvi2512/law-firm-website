import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import officeImageGallery from '../helper/data/imageGallery'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useMediaQuery } from '@chakra-ui/react';

export default function MobileImageCarousel() {
  const [isLargerThan950] = useMediaQuery('(min-width: 950px)')
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {officeImageGallery.map((image, index) => (
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
        ))
        }
      </Swiper>
    </>
  );
}

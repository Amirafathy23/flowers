'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bg2 from '../../../assets/images/Christmas.png' ;
import bg3 from '../../../assets/images/present.png' ;
import banner from '../../../assets/images/hs-1-banner.jpg (1).png'
import bg1 from '../../../assets/images/Background (2).png'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
export default function MainSlider() {
  return <>
  <div className="flex px-8 ">
    <div className="w-1/3 bg-gray-200">
    <div className=' relative w-full h-[400px]'>
    <Image src={banner} alt="gift" fill className="object-cover" />
    </div>
    </div>

    <div className="w-2/3 bg-red-200 ">
      <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation 
            
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-lg shadow-lg"
          >
             
              <SwiperSlide >
                <div className='relative w-full h-[400px]'>
                <Image src={bg1} alt="flower" fill className="object-cover" />
                </div>  
              </SwiperSlide>
              <SwiperSlide >
                <div className='relative w-full h-[400px]'>
                <Image src={bg2} alt="flower" fill className="object-cover" />
                </div>  
              </SwiperSlide>
              <SwiperSlide >
                <div className='relative w-full h-[400px]'>
                <Image src={bg3} alt="flower" fill className="object-cover" />
                </div>  
              </SwiperSlide>
           
          </Swiper></div>
  </div>
  </>
}

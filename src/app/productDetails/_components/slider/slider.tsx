"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Slider({allImages}:{allImages:string[]}) {


  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation 
        
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg shadow-lg"
      >
         {allImages.map((img, index) => (
          <SwiperSlide key={index}>
            
            <Image width={420} height={300}  src={img} alt={`Slide ${index}`}  />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
}

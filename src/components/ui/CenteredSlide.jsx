import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const CenteredSlide = ({ data }) => {
  return (
    <div className="relative w-full flex justify-center">
      <Swiper
        slidesPerView={7} // Shows 7 slides at a time
        spaceBetween={20} // Adjust spacing
        centeredSlides={true} // Centered active slide
        loop={true} // Infinite looping
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Optional autoplay
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1280: { slidesPerView: 7, spaceBetween: 20 },
        }}
        className="w-full"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="
              transition-transform duration-500 ease-in-out
              scale-75 opacity-70
              swiper-slide-active:scale-125 swiper-slide-active:opacity-100
              swiper-slide-prev:scale-90 swiper-slide-next:scale-90
              flex justify-center items-center
            ">
              <Image
                src={slide.image}
                alt={slide.title}
                width={300}
                height={400}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CenteredSlide;

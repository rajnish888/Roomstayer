// "use client";

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Carousel = ({
  data,
  config = {},
  containerClassName = "",
  slideContainerClassName = "",
  imageClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  priceClassName = "",
  feesTextClassName = "",
  isCentered = false,
  setSwiperInstance,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
      if (setSwiperInstance) {
        setSwiperInstance(swiper);
      }
    }
  }, []);

  return (
    <div className={`relative ${containerClassName}`}>
      <Swiper
        ref={swiperRef}
        slidesPerView={config.slidesPerView || 3}
        spaceBetween={config.spaceBetween || 16}
        centeredSlides={isCentered}
        loop={config.loop || false}
        initialSlide={config.initialSlide || 0}
        pagination={config.pagination ? { clickable: true } : false}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        autoplay={config.autoplay ? { delay: 3000 } : false}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={config.breakpoints || {
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: config.slidesPerView || 4, spaceBetween: 16 },
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className={`transition-transform duration-300 rounded-lg ${slideContainerClassName}`}>
              <Image 
                src={slide.image} 
                alt={slide.title || "Carousel Image"} 
                width={300} 
                height={200} 
                className={`object-cover ${imageClassName}`} 
              />
              {slide.title && <h3 className={titleClassName}>{slide.title}</h3>}
              {slide.description && <p className={descriptionClassName}>{slide.description}</p>}
              {slide.price && <p className={priceClassName}>{slide.price}</p>}
              {slide.feesText && <p className={feesTextClassName}>{slide.feesText}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      {config.navigation && (
        <>
          <button ref={prevRef} className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white border text-blue-500 border-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-100">
            <FaAngleLeft />
          </button>
          <button ref={nextRef} className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white border text-blue-500 border-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-100">
            <FaAngleRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;

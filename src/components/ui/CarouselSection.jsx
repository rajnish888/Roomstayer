"use client";

import React, { useRef } from "react";
import Carousel from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const CarouselSection = ({ 
  title, 
  data, 
  customNavigation,
  config = {}, 
  carouselClassName = "",
  isCentered = false,
  prevArrow = <FaAngleLeft />, 
  nextArrow = <FaAngleRight />, 
  ...otherProps 
}) => {
  const swiperRef = useRef(null);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <div className="mt-20 mb-10">
      <div className="container px-4">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <h2 className="text-custom-32 font-bold">{title}</h2>

          {config.customNavigation && (
            <div className="flex gap-6">
              <Button onClick={handlePrev} className=" bg-white border text-blue-500 border-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-100">
                {prevArrow}
              </Button>
              <Button onClick={handleNext} className=" bg-white border text-blue-500 border-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-100">
                {nextArrow}
              </Button>
            </div>
          )}
        </div>

        <Carousel
          className={`swiper-container ${carouselClassName}`} 
          data={data}
          config={config}
          isCentered={isCentered}
          setSwiperInstance={(swiper) => (swiperRef.current = swiper)}
          {...otherProps}
        />


        
      </div>
    </div> 
  );
};

export default CarouselSection;

"use client";

import React, { useRef, useState } from 'react';
import Header from '@/components/ui/Header';
import Banner from '@/components/ui/Banner';
import Carousel from '@/components/ui/Carousel';
import Card1 from '../../public/images/Card1.jpg';
import Card2 from '../../public/images/Card2.jpg';
import Card3 from '../../public/images/Card3.jpg';
import Card4 from '../../public/images/Card4.jpg';
import Card5 from '../../public/images/Card5.jpg';
import Card6 from '../../public/images/Card6.jpg';
import Card7 from '../../public/images/Card7.jpg';
import Card8 from '../../public/images/Card8.jpg';
import Card9 from '../../public/images/Card9.jpg';
import Card10 from '../../public/images/Card10.jpg';
import Card11 from '../../public/images/Card11.jpg';
import Card12 from '../../public/images/Card12.jpg';
import Card13 from '../../public/images/Card13.jpg';
import Card14 from '../../public/images/Card14.jpg';
import Card15 from '../../public/images/Card15.jpg';
import Card16 from '../../public/images/Card16.jpg';
import Card17 from '../../public/images/Card17.jpg';
import Card18 from '../../public/images/Card18.jpg';
import Card19 from '../../public/images/Card19.jpg';



import { Button } from '@/components/ui/Button';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import CarouselSection from '@/components/ui/CarouselSection';
import CenteredSlide from '@/components/ui/CenteredSlide';
import HomeFeatureSection from '@/components/ui/HomeFeatureSection';



const topDestinations = [
  { image: Card1, title: "Bali" },
  { image: Card2, title: "Bangkok" },
  { image: Card3, title: "Cancun" },
  { image: Card4, title: "Nha Trang" },
  { image: Card1, title: "Bali" },
  { image: Card2, title: "Bangkok" },
  { image: Card3, title: "Cancun" },
  { image: Card4, title: "Nha Trang" }
];


const centeredSlider = [
  { image: Card13 , title: 'Slider-img'},
  { image: Card14 , title: 'Slider-img'},
  { image: Card15 , title: 'Slider-img'},
  { image: Card16 , title: 'Slider-img'},
  { image: Card17 , title: 'Slider-img'},
  { image: Card18 , title: 'Slider-img'},
  { image: Card19 , title: 'Slider-img'},
  { image: Card13 , title: 'Slider-img'},
  { image: Card14 , title: 'Slider-img'},
  { image: Card15 , title: 'Slider-img'},
  { image: Card16 , title: 'Slider-img'},
  { image: Card17 , title: 'Slider-img'},
  { image: Card18 , title: 'Slider-img'},
  { image: Card19 , title: 'Slider-img'},


];

const diffSpaces = [
  { image: Card9, title: "House" },
  { image: Card10, title: "Appartment" },
  { image: Card11, title: "Cabin" },
  { image: Card12, title: "Villa" },
  { image: Card9, title: "House" },
  { image: Card10, title: "Appartment" },
  { image: Card11, title: "Cabin" },
  { image: Card12, title: "Villa" },
];

const weekendGetway = [
  { image: Card5, title: "Island Peak Climbing", description: 'Nepal, Pokhara, Tibet', price: '$569.00/Person', feesText: 'All Fees included' },
  { image: Card6, title: "Island Peak Climbing", description: 'Nepal, Pokhara, Tibet', price: '$569.00/Person', feesText: 'All Fees included' },
  { image: Card7, title: "Island Peak Climbing", description: 'Nepal, Pokhara, Tibet', price: '$569.00/Person', feesText: 'All Fees included' },
  { image: Card8, title: "Island Peak Climbing", description: 'Nepal, Pokhara, Tibet', price: '$569.00/Person', feesText: 'All Fees included' },
  { image: Card5, title: "Island Peak Climbing", description: 'Nepal, Pokhara, Tibet', price: '$569.00/Person', feesText: 'All Fees included' },
  { image: Card6, title: "Island Peak Climbing", description: 'Nepal, Pokhara, Tibet', price: '$569.00/Person', feesText: 'All Fees included' },
  { image: Card7, title: "Island Peak Climbing", description: 'Nepal, Pokhara, Tibet', price: '$569.00/Person', feesText: 'All Fees included' },
  { image: Card8, title: "Island Peak Climbing", description: 'Nepal, Pokhara, Tibet', price: '$569.00/Person', feesText: 'All Fees included' }
];

const cardData = [
  { image: Card9, title: "House" },
  { image: Card10, title: "Appartment" },
  { image: Card10, title: "Appartment" },
  { image: Card11, title: "Cabin" },

];




const Page = ({ carouselClassName, ...otherProps }) => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };


  return (
    <>
      <Header />
      <Banner
        title="Discover Amazing Places"
        subtitle="Plan your next trip with us"
        placeholderDestination="Enter a destination"
        placeholderDates="Select your dates"
        buttonColor="bg-green-500"
      />

      <CarouselSection titleClassName="absolute bottom-3 left-4 text-2xl font-bold text-white"
        title="Top Destinations for Your Next Vacation"
        data={topDestinations}
        imageClassName="rounded-2xl w-full h-full"
        config={{ slidesPerView: 4, pagination: false, navigation: false,customNavigation: true, autoplay: false , centeredSlides: false, }}
       
      />

      <CarouselSection
        imageClassName="rounded-2xl w-full h-full"
        titleClassName="font-semibold text-lg mt-3"
        descriptionClassName="text-sm mb-2"
        feesTextClassName="text-sm mb-2"
        title="Discover the Weekend Getaway"
        data={weekendGetway}
        priceClassName="text-blue-500 text-lg"
        config={{ slidesPerView: 4, pagination: false, navigation: true, autoplay: false , centeredSlides: false,}}
       
      />

      <CarouselSection
        title="Different Spaces for Your Stay"
        data={diffSpaces}
        config={{ slidesPerView: 4, pagination: false, navigation: true, autoplay: false, centeredSlides: false, }}
        navigationPrevEl="swiper-button-prev-diffSpaces"
        imageClassName="rounded-2xl w-full h-full"
        titleClassName="absolute bottom-3 left-4 text-2xl font-bold text-white"

      />


      <HomeFeatureSection  titleClassName="absolute bottom-3 left-4 text-2xl font-bold text-white" cardData={cardData} />

      <div className='w-full overflow-hidden'>
        <Carousel
          containerClassName="relative mt-10"
          slideContainerClassName="peer transition-transform duration-300"
          imageClassName="rounded-2xl rounded-2xl transition-transform duration-300"
          titleClassName="absolute bottom-3 left-4 text-2xl font-bold text-white"
          data={centeredSlider}
          isCentered={true} 
          config={{
            slidesPerView: 7, 
            centeredSlides: true, 
            loop: true, 
            pagination: false,
            navigation: false,
            autoplay: false,
            initialSlide: 7, 
          }}
        />
      </div>




    </>
  );
};

export default Page;

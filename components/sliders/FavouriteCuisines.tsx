// components/HeroRightSlider.tsx
"use client";
import { FavouriteCuisinesData } from "@/Constant";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const FavouriteCuisines = () => {
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024, // below 1024px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // below 640px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  
  return (
    <div className="w-full   rounded-md text-white text-sm text-center my-6">
        <div className="my-4 w-full text-start ml-6">
                Favourite Cuisines
            </div>
      <Slider {...settings}>
        {FavouriteCuisinesData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center space-y-1"
          >
            
           <div className="flex flex-col justify-center items-center">
             <Image
              src={item.imageUrl} // Replace with your actual image path
              alt="Your description"
              width={100}
              height={100}
              className="rounded-full"
              priority
            />
           </div>
            <span className="font-semibold text-base text-blue-950">{item.title}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FavouriteCuisines;

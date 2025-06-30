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
  slidesToShow: 6,
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
    <div className="w-full   rounded-md text-white text-sm text-center my-2">
        <div className="relative my-2 w-full text-start ml-6 ">
                Favourite Cuisines
            </div>
      <Slider {...settings}>
        {FavouriteCuisinesData?.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center space-y-1 w-"
          >
            
           <div className="relative bg-slate-300 m-2 h-[130px] w-[130px] rounded-md ">
            <div className=" absolute top-0 left-0 right-0 flex flex-col justify-center items-center py-1">
             <Image
              src={item.imageUrl} // Replace with your actual image path
              alt="Your description"
              width={100}
              height={100}
              className="rounded-full"
              // priority
            />
           </div>
            <span className="absolute bottom-1 left-0 right-0 font-semibold text-base mt-6 text-slate-800">{item.title}</span>
           </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FavouriteCuisines;

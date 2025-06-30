// components/HeroRightSlider.tsx
"use client";
import { DailyDealsData} from "@/Constant";
import React from "react";
import Slider from "react-slick";

const DailyDeals = () => {
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 600,
  slidesToShow: 3,
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
               Daily Deals
            </div>
      <Slider {...settings} >
        {DailyDealsData?.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center space-y-1 "
          >
            
           <div className=" bg-slate-300 m-2 h-[130px] w-[290px] bg-cover bg-center rounded-xl" style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}>
            
           </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DailyDeals;

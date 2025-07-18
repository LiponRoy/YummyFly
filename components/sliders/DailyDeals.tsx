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
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,

//  variableWidth: true,
		centerMode: true,
		centerPadding: "15",

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
    <div className=" rounded-md  text-sm text-center w-full m-0 p-0">
        <div className="relative text-start ml-2 text-slate-700 text-[24px] my-2">
               Your Daily Deals
            </div>
      <Slider className="w-full" {...settings} >
        {DailyDealsData?.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col justify-between items-center space-y-1 "
          >
            
           <div className="  h-[130px] w-[250px] bg-cover bg-center rounded-xl" style={{
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

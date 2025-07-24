// components/HeroRightSlider.tsx
"use client";
import { DailyDealsData } from "@/Constant";
import { useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";

const DailyDeals = () => {
    const route =useRouter();
    
    const goToFoodCuisines = (id:number) => {
      route.push(`/offer/${id}`);
    };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500, // Smooth slide duration
    cssEase: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Bouncy feel
    autoplay: true,
    autoplaySpeed: 5000, // Delay between auto slides
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15",
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    pauseOnHover: true, // Optional
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding: "15",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // variableWidth: true,
          dots: false,
          // centerPadding: "5",
        },
      },
      // {
      //   breakpoint: 400,
      //   settings: {
      //     slidesToShow: 1,
      //     centerMode: false,
      //     // variableWidth: true,
      //     dots: false,
      //     // centerPadding: "2",
      //   },
      // },
    ],
  };

  return (
    <div className=" rounded-md  text-sm text-center w-full m-0 p-0">
      <div className="relative text-start ml-2 text-slate-700 text-[24px] my-2">Your Daily Deals</div>
      <Slider className="w-full" {...settings}>
        {DailyDealsData?.map((item, index) => (
          <div key={index} onClick={()=>goToFoodCuisines(item.id)} className=" flex flex-col justify-between items-center space-y-1 cursor-pointer">
            <div
              className="  h-[150px] md:h-[130px] w-[96%] md:w-[250px] bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DailyDeals;

// components/HeroRightSlider.tsx
"use client";
import { Cuisines, FavouriteCuisinesData } from "@/Constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";

const FavouriteCuisines = () => {
  const route =useRouter();
  
  const goToFoodCuisines = (id:number) => {
    route.push(`/cuisines/${id}`);
  };

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  slidesToShow: 6,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024, // below 1024px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // below 640px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <div className="w-full   rounded-md text-sm text-center mt-8 flex flex-col justify-center items-center">
        <div className="relative  text-slate-700 text-[24px] text-start ">
                Favorite Cuisines
            </div>
      <div className="w-[90%]">
        <Slider {...settings}>
        {Cuisines?.map((item, index) => (
          <div
          onClick={()=>goToFoodCuisines(item.id)}
            key={index}
            className=" flex flex-col justify-center items-center w-full"
          >
            
           <div className="relative  m-2 h-[100px] md:h-[110px] w-[100px] md:w-[130px] rounded-md bg-slate-200 shadow cursor-pointer">
            <div className=" absolute top-0 left-0 right-0 flex flex-col justify-center items-center py-1 ">
             <Image
              src={item.imageUrl} // Replace with your actual image path
              alt="Your description"
              width={300}
              height={300}
              className="rounded-full h-[70px] w-[70px] bg-contain"
              // priority
            />
           </div>
            <span className="absolute bottom-1 left-0 right-0 font-semibold text-base mt-2 text-slate-800">{item.CuisinesName}</span>
           </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default FavouriteCuisines;

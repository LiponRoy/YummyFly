"use client"
import RestaurantCard from "@/components/Card";
import React, { use, useEffect, useState } from "react";
import { Cuisines } from "@/Constant";
import { useRestaurant } from "@/hooks/useRestaurant";
import { IRestaurant } from "@/Type";

type FoodProps = {
  params: {
    id: string;
  };
};

const CuisinesPage = ({ params }: { params: Promise<FoodProps["params"]> }) => {
  const { id } = use(params);

    // fetch data using SWR 
  const { restaurants, isLoading, isError } = useRestaurant();

  const cuisinesData = restaurants?.filter((data:IRestaurant) =>
  data?.cuisines?.includes(id)
);

  return (
    <div className="mt-14 mb-1 ">
      {/* // Banner */}
      <div
  className="relative w-full h-[10vh] md:h-[30vh] bg-cover bg-center"
  style={{ backgroundImage: "url('/cuisinesBg.jpg')" }}
>
  <div className="absolute inset-0 flex justify-start items-center container-custom">
    <span className="text-slate-300 text-xl md:text-6xl font-semibold ml-4 md:ml-0">
      Favorite Cuisines
    </span>
  </div>
</div>


      {/* // card Grid */}
      <div className="container-custom m-3">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {cuisinesData?.map((val:IRestaurant, i:number) => (
            <RestaurantCard key={i} restaurant={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuisinesPage;
